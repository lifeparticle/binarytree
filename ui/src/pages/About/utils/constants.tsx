import { Space, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { Api, Feature, LibraryList, Other } from "./types";

const APP_VALUES = [
	<>
		<Typography.Text strong>Easily Shareable Links:</Typography.Text>{" "}
		Sharing information should be as straightforward as possible. That's why
		we provide easily shareable links for{" "}
		<a
			href="colors/shades-tints?color=%23559D81&numShades=10"
			target="_blank"
		>
			color codes
		</a>
		,{" "}
		<a href="list/course?q=&cat=React" target="_blank">
			lists
		</a>
		, and more. This feature not only enhances collaboration but also
		improves overall productivity.
	</>,
	<>
		<Typography.Text strong>Data Verification:</Typography.Text> Data
		integrity is crucial in software development. Our platform allows you to
		verify essential data such as{" "}
		<a href="converter/base-64" target="_blank">
			Base64
		</a>
		,{" "}
		<a href="converter/jtt" target="_blank">
			JSON
		</a>
		, and others, ensuring accuracy and reliability in your projects.
	</>,
	<>
		<Typography.Text strong>Smart Data Detection:</Typography.Text> Our
		platform is equipped with intelligent data detection capabilities to
		simplify your tasks. With smart data detection, it can automatically{" "}
		<a href="data/sorting" target="_blank">
			sort
		</a>{" "}
		your data, saving you time and hassle.
	</>,
];

const APP_SUPPORT = [
	<>
		Consider supporting this project using{" "}
		<a href="https://github.com/sponsors/lifeparticle">GitHub Sponsors.</a>{" "}
		Show your appreciation and help ensure the project's sustainability by
		making monthly, recurring, or one-time payments. Your contribution makes
		a difference!
	</>,
];

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
	"values.js": "https://www.npmjs.com/package/values.js",
};

const API_COLUMNS: ColumnsType<Api> = [
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

const API_DATA: Api[] = [
	{
		name: "News",
		api: "https://newsapi.org",
		key: "news",
	},
];

const OTHER_COLUMNS: ColumnsType<Other> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<Link to={record.url} key={record.name}>
				{text}
			</Link>
		),
	},
];

const OTHER_DATA: Other[] = [
	{
		key: "1",
		name: "Avatar",
		url: "https://www.dicebear.com/styles/adventurer-neutral",
	},
];

const FEATURE_COLUMNS: ColumnsType<Feature> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<Link to={record.link} key={record.key}>
				{text}
			</Link>
		),
		width: 80,
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
		width: 90,
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
							<Tag
								color={
									lib.name === "Vanilla JS" ? "green" : "gold"
								}
							>
								{lib.name}
							</Tag>
						</a>
					);
				})}
			</>
		),
		width: 150,
	},
];

const FEATURE_DATA: Feature[] = [
	{
		key: "1",
		name: "Color Picker",
		description: "Choose your desired color",
		link: "/colors/cp",
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: "2",
		name: "Shades & Tints Generator",
		description: "Choose your desired Shades and Tints",
		link: "/colors/shades",
		library: [{ name: "values.js", url: LIBRARY_URLS["values.js"] }],
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
		key: "5",
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
		key: "6",
		name: "Data Generator",
		description: "Generate any type of data",
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
		key: "7",
		name: "Image generate from colors",
		description: "Generate image from color code",
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
		key: "8",
		name: "Sorting",
		description: "Sort numbers or strings",
		link: "/data/sorting",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "9",
		name: "List",
		description: "List of things",
		link: "/list",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "10",
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
		key: "11",
		name: "Markdown table generator",
		description: "Generate a table from the markdown",
		link: "/markdown/md-table-generator",
		library: [
			{
				name: "@uiw/react-md-editor",
				url: LIBRARY_URLS["@uiw/react-md-editor"],
			},
		],
	},
	{
		key: "12",
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
		key: "13",
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

export {
	LIBRARY_URLS,
	FEATURE_COLUMNS,
	FEATURE_DATA,
	API_DATA,
	API_COLUMNS,
	APP_VALUES,
	APP_SUPPORT,
	OTHER_COLUMNS,
	OTHER_DATA,
};
