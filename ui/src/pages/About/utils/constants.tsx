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

const library_lists = {
	"tiny-color-2": {
		name: "Tiny color",
		url: "https://www.npmjs.com/package/tinycolor2",
	},
	"prism-react-renderer": {
		name: "Prism react renderer",
		url: "https://www.npmjs.com/package/prism-react-renderer",
	},
	"faker-js": {
		name: "faker js",
		url: "https://www.npmjs.com/package/@faker-js/faker",
	},
	marked: {
		name: "Marked",
		url: "https://www.npmjs.com/package/marked",
	},
	"file-saver": {
		name: "File saver",
		url: "https://www.npmjs.com/package/file-saver",
	},
	"jszip-utils": {
		name: "jszip utils",
		url: "https://www.npmjs.com/package/jszip-utils",
	},
	"html-to-image": {
		name: "HTML to image",
		url: "https://www.npmjs.com/package/html-to-image",
	},
	"@uiw/react-md-editor": {
		name: "React md editor",
		url: "https://www.npmjs.com/package/@uiw/react-md-editor",
	},
	tinymce: {
		name: "Tiny Mce",
		url: "https://www.npmjs.com/package/@tinymce/tinymce-react",
	},
};

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
				<a href={record.api} target="_blank" rel="noopener noreferrer">
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
						<a
							key={lib.url}
							href={lib.url}
							target="_blank"
							rel="noopener noreferrer"
						>
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
		library: [library_lists["tiny-color-2"]],
	},
	{
		key: "2",
		name: "Shades Generator",
		description: "choose your desired Shades",
		link: "/colors/shades",
		library: [library_lists["tiny-color-2"]],
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
		library: [library_lists["prism-react-renderer"]],
	},
	{
		key: "5",
		name: "Data Generator",
		description: "generate any type of data",
		link: "/data/data-gen",
		library: [library_lists["faker-js"], library_lists["marked"]],
	},
	{
		key: "6",
		name: "Image generate from colors",
		description: "generate image from color code",
		link: "/data/igfc",
		library: [
			library_lists["file-saver"],
			library_lists["jszip-utils"],
			library_lists["html-to-image"],
		],
	},
	{
		key: "7",
		name: "Sorting numbers or character",
		description: "Sort number or character",
		link: "/data/sorting",
		library: [],
	},
	{
		key: "8",
		name: "Markdown Editor",
		description: "Write markdown and download",
		link: "/markdown/me",
		library: [library_lists["@uiw/react-md-editor"]],
	},
	{
		key: "9",
		name: "Markdown table generator",
		description: "Generate table from markdown",
		link: "/markdown/md-table-generator",
		library: [library_lists["@uiw/react-md-editor"]],
	},
	{
		key: "10",
		name: "Markdown table of content",
		description: "Generate table from markdown",
		link: "/markdown/toc",
		library: [library_lists["marked"]],
	},
	{
		key: "11",
		name: "Text Editor",
		description: "Generate rich text",
		link: "/text/te",
		library: [library_lists["marked"]],
	},
];

export { columns, data, apiData, apiColumns };
