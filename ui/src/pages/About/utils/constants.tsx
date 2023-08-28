import { Space, Tag } from "antd";
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

interface LibraryList {
	[key: string]: string;
}

const LIBRARY_URLS: LibraryList = {
	"tiny-color-2": "https://www.npmjs.com/package/tinycolor2",
	"prism-react-renderer":
		"https://www.npmjs.com/package/prism-react-renderer",
	"faker-js": "https://www.npmjs.com/package/@faker-js/faker",
	marked: "https://www.npmjs.com/package/marked",
	"file-saver": "https://www.npmjs.com/package/file-saver",
	"jszip-utils": "https://www.npmjs.com/package/jszip-utils",
	"html-to-image": "https://www.npmjs.com/package/html-to-image",
	"@uiw/react-md-editor":
		"https://www.npmjs.com/package/@uiw/react-md-editor",
	tinymce: "https://www.npmjs.com/package/@tinymce/tinymce-react",
};

const API_COLUMNS: ColumnsType<ApiInterfaceType> = [
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
				<a href={record.api} target="_blank" rel="noopener noreferrer">
					{record.api}
				</a>
			</Space>
		),
	},
];

const API_DATA: ApiInterfaceType[] = [
	{
		name: "News",
		api: "https://newsapi.org",
		key: "news",
	},
];

const DATA_COLUMNS: ColumnsType<DataType> = [
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
						<a
							key={lib.url}
							href={lib.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Tag>{lib.name}</Tag>
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
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: "2",
		name: "Shades Generator",
		description: "choose your desired Shades",
		link: "/colors/shades",
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: "3",
		name: "Base 64 Converter",
		description: "Convert text to base64",
		link: "/converter/base-64",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "4",
		name: "Pixel converter",
		description: "Convert pixel to rem",
		link: "/converter/pixel",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "4",
		name: "Json to typescript converter",
		description: "Convert Json to typescript",
		link: "/converter/jtt",
		library: [
			{
				name: "prism-react-renderer",
				url: LIBRARY_URLS["prism-react-renderer"],
			},
		],
	},
	{
		key: "5",
		name: "Data Generator",
		description: "generate any type of data",
		link: "/data/data-gen",
		library: [
			{
				name: "faker-js",
				url: LIBRARY_URLS["faker-js"],
			},
			{
				name: "marked",
				url: LIBRARY_URLS["marked"],
			},
		],
	},
	{
		key: "6",
		name: "Image generate from colors",
		description: "generate image from color code",
		link: "/data/igfc",
		library: [
			{
				name: "file-saver",
				url: LIBRARY_URLS["file-saver"],
			},
			{
				name: "jszip-utils",
				url: LIBRARY_URLS["jszip-utils"],
			},
			{
				name: "html-to-image",
				url: LIBRARY_URLS["html-to-image"],
			},
		],
	},
	{
		key: "7",
		name: "Sorting numbers or character",
		description: "Sort number or character",
		link: "/data/sorting",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "8",
		name: "Markdown Editor",
		description: "Write markdown and download",
		link: "/markdown/me",
		library: [
			{
				name: "html-to-image",
				url: LIBRARY_URLS["html-to-image"],
			},
		],
	},
	{
		key: "9",
		name: "Markdown table generator",
		description: "Generate table from markdown",
		link: "/markdown/md-table-generator",
		library: [
			{
				name: "@uiw/react-md-editor",
				url: LIBRARY_URLS["@uiw/react-md-editor"],
			},
		],
	},
	{
		key: "10",
		name: "Markdown table of content",
		description: "Generate table from markdown",
		link: "/markdown/toc",
		library: [
			{
				name: "marked",
				url: LIBRARY_URLS["marked"],
			},
		],
	},
	{
		key: "11",
		name: "Text Editor",
		description: "Generate rich text",
		link: "/text/te",
		library: [
			{
				name: "marked",
				url: LIBRARY_URLS["marked"],
			},
		],
	},
];

export { LIBRARY_URLS, DATA_COLUMNS, data, API_DATA, API_COLUMNS };
