import { ColumnsType } from "antd/es/table";
import { MimeTableDataType } from "./types";
import { Tag } from "antd";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
const MIME_URL = "/mime/data.json";
const MIME_KEY = "mimetype";
// Column
const MIME_COLUMNS: ColumnsType<MimeTableDataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (value) => {
			return <Tag>{value}</Tag>;
		},
	},
	{
		title: "Example",
		dataIndex: "example",
		key: "example",
		render: (value) => {
			return (
				<div>
					<p>{value}</p>
				</div>
			);
		},
	},
	{
		title: "Code",
		dataIndex: "code",
		key: "code",
		width: 200,
		render: (value) => {
			return (
				<div>
					<CodeHighlightWithCopy
						language="typescript"
						codeString={JSON.stringify(value)}
					/>
				</div>
			);
		},
	},
];

export { MIME_COLUMNS, MIME_URL, MIME_KEY };
