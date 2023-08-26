import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
	key: string;
	name: string;
	description: string;
	link: string;
	library: { name: string; url: string }[];
}

interface ApiInterfaceType {
	name: string;
	key: string;
	api: string;
}

const apiColumns: ColumnsType<ApiInterfaceType> = [
	{
		title: "Page Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Url",
		dataIndex: "api",
		key: "api",
		render: (_, record) => (
			<Space size="middle">
				<a href={record.api} target="_blank">
					{record.api}
				</a>
			</Space>
		),
	},
];

const apiData: ApiInterfaceType[] = [
	{
		name: "News",
		api: "https://newsapi.org",
		key: "news",
	},
];

const columns: ColumnsType<DataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Link",
		dataIndex: "link",
		key: "link",
		render: (_, { link }) => (
			<Link to={link} key={link}>
				Visit
			</Link>
		),
	},
	{
		title: "Library",
		key: "library",
		dataIndex: "library",
		render: (_, { library }) => (
			<>
				{library.map((lib) => {
					return (
						<a key={lib.url} href={lib.url}>
							{lib.name}
						</a>
					);
				})}
			</>
		),
	},
];

const data: DataType[] = [
	{
		key: "1",
		name: "Color Picker",
		description: "choose your desired color",
		link: "/colors/cp",
		library: [
			{
				name: "tinycolor2",
				url: "https://www.npmjs.com/package/tinycolor2",
			},
		],
	},
	{
		key: "2",
		name: "Shades Generator",
		description: "choose your desired Shades",
		link: "/colors/shades",
		library: [
			{
				name: "tinycolor2",
				url: "https://www.npmjs.com/package/tinycolor2",
			},
		],
	},
	{
		key: "3",
		name: "Base 64 Converter",
		description: "Convert text to base64",
		link: "/converter/base-64",
		library: [],
	},
	{
		key: "4",
		name: "Pixel converter",
		description: "Convert pixel to rem",
		link: "/converter/pixel",
		library: [],
	},
	{
		key: "4",
		name: "Json to typescript converter",
		description: "Convert Json to typescript",
		link: "/converter/jtt",
		library: [
			{
				name: "prism-react-renderer",
				url: "https://www.npmjs.com/package/prism-react-renderer",
			},
		],
	},
];

export { columns, data, apiData, apiColumns };
