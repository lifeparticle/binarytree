import { ColumnsType } from "antd/es/table";
import { MIME_TABLE_TYPE } from "./types";
import imageJpg from "assets/about.jpg";

// Define a function to render different MIME types
const renderMIMEType = (value: string) => {
	if (value.endsWith(".jpg")) {
		return (
			<div>
				<img
					style={{ width: "80px", height: "50px" }}
					src={imageJpg}
					alt=""
				/>
			</div>
		);
	}

	if (value.endsWith(".mp3")) {
		return (
			<div>
				<audio src={value} controls></audio>
			</div>
		);
	}
	if (value.endsWith(".mp4")) {
		return (
			<div>
				<video width={250} height={100} src={value} controls></video>
			</div>
		);
	}
	return <code>{value}</code>;
};

// Define MIME_COLUMNS as a constant array of column configurations
const MIME_COLUMNS: ColumnsType<MIME_TABLE_TYPE> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Example",
		dataIndex: "example",
		key: "example",
		render: renderMIMEType,
	},
	{
		title: "Code",
		dataIndex: "code",
		key: "code",
	},
];

// Define MIME_DATA as a constant array of data
const MIME_DATA: MIME_TABLE_TYPE[] = [
	{
		key: "1",
		name: ".json",
		example: `{"x": 1}`,
		code: "application/json",
	},
	{
		key: "2",
		name: ".jpeg or .jpg",
		example: `/bg.jpg`,
		code: "image/jpeg",
	},
	{
		key: "3",
		name: ".js",
		example: `let x = 10;`,
		code: "text/javascript",
	},
	{
		key: "4",
		name: ".mp3",
		example: `/mime/applause.mp3`,
		code: "audio/mpeg",
	},
	{
		key: "5",
		name: ".mp4",
		example: `/mime/video.mp4`,
		code: "video/mp4",
	},
];

export { MIME_COLUMNS, MIME_DATA };
