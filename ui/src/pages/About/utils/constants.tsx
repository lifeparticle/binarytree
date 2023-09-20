import { Space, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Api, Feature, LibraryList, Other } from "./types";
import { routesById } from "pages/Routes/utils/constant";

const APP_VALUES = [
	<>
		<Typography.Text strong>Easily Shareable Links:</Typography.Text>{" "}
		Sharing information should be as straightforward as possible. That's why
		we provide easily shareable links for{" "}
		<a
			href="colors/shades-tints?color=%23559D81&numShades=10"
			target="_blank"
		>
			Shades & Tints
		</a>
		,{" "}
		<a href="resource/course?q=&cat=React" target="_blank">
			Resources
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
			Sort
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
	webfontloader: "https://www.npmjs.com/package/webfontloader",
};

const API_COLUMNS: ColumnsType<Api> = [
	{
		title: "Page Name",
		dataIndex: "name",
		key: "name",
		align: "center",
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
		align: "center",
	},
];

const OTHER_COLUMNS: ColumnsType<Other> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<a href={record.url} target="_blank" rel="noopener noreferrer">
				{text}
			</a>
		),
		align: "center",
	},
];

const OTHER_DATA: Other[] = [
	{
		key: "1",
		name: "Avatar",
		url: "https://www.dicebear.com/styles/adventurer-neutral",
	},
	{
		key: "2",
		name: "Open Props",
		url: "https://github.com/argyleink/open-props",
	},
	{
		key: "3",
		name: "News API",
		url: "https://newsapi.org",
	},
	{
		key: "4",
		name: "unDraw",
		url: "https://undraw.co/",
	},
];

const FEATURE_COLUMNS: ColumnsType<Feature> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text, record) => (
			<a
				href={record.link}
				target="_blank"
				rel="noopener noreferrer"
				key={record.key}
			>
				{text}
			</a>
		),
		width: 80,
		align: "center",
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
		width: 90,
		align: "center",
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
		align: "center",
	},
];

const FEATURE_DATA: Feature[] = [
	{
		key: routesById.newsfeed.id,
		name: routesById.newsfeed.title,
		description: "Tech news",
		link: "/newsfeed",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.colorpicker.id,
		name: routesById.colorpicker.title,
		description: "Choose your desired color",
		link: "/colors/cp",
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: routesById.shadesandtints.id,
		name: routesById.shadesandtints.title,
		description: "Choose your desired Shades and Tints",
		link: "/colors/shades",
		library: [{ name: "values.js", url: LIBRARY_URLS["values.js"] }],
	},
	{
		key: routesById.borderradius.id,
		name: routesById.borderradius.title,
		description: "Choose your desired border radius",
		link: "/css/br",
		library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	},
	// {
	// 	key: "5",
	// 	name: "Border Shadow",
	// 	description: "Choose your desired border radius",
	// 	link: "/css/br",
	// 	library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	// },
	{
		key: routesById.svgformatter.id,
		name: routesById.svgformatter.title,
		description: "Merge svg path",
		link: "/css/svg-formatter",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.base64.id,
		name: routesById.base64.title,
		description: "Convert text to base64",
		link: "/converter/base-64",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.pixelconverter.id,
		name: routesById.pixelconverter.title,
		description: "Convert pixel to rem",
		link: "/converter/pixel",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.jsontotypescript.id,
		name: routesById.jsontotypescript.title,
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
		key: routesById.data.id,
		name: routesById.data.title,
		description: "Generate any type of data",
		link: "/generator/data",
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
		key: routesById.image.id,
		name: routesById.image.title,
		description: "Generate image from color code",
		link: "/generator/igfc",
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
		key: routesById.avatar.id,
		name: routesById.avatar.title,
		description: "Generate avatar from text",
		link: "/generator/avatar",
		library: [
			{
				name: "file-saver",
				url: LIBRARY_URLS["file-saver"],
			},
			{
				name: "html-to-image",
				url: LIBRARY_URLS["html-to-image"],
			},
			{
				name: "webfontloader",
				url: LIBRARY_URLS["webfontloader"],
			},
		],
	},
	{
		key: routesById.qrcode.id,
		name: routesById.qrcode.title,
		description: "Generate QR code from text",
		link: "/generator/qrcode",
		library: [],
	},
	{
		key: routesById.sorting.id,
		name: routesById.sorting.title,
		description: "Sort numbers or strings",
		link: "/generator/sorting",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: "15",
		name: "Resource",
		description: "List of things",
		link: "/resource/blog",
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.editor.id,
		name: routesById.editor.title,
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
		key: routesById.table.id,
		name: routesById.table.title,
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
		key: routesById.tableofcontent.id,
		name: routesById.tableofcontent.title,
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
		key: routesById.texteditor.id,
		name: routesById.texteditor.title,
		description: "Generate rich text",
		link: "/text/te",
		library: [
			{
				name: "marked",
				url: LIBRARY_URLS["marked"],
			},
		],
	},
	{
		key: routesById.mimetype.id,
		name: routesById.mimetype.title,
		description: "Search mimetype",
		link: "/info/mimetype",
		library: [{ name: "Vanilla JS", url: "" }],
	},
];

export {
	LIBRARY_URLS,
	FEATURE_COLUMNS,
	FEATURE_DATA,
	API_COLUMNS,
	APP_VALUES,
	APP_SUPPORT,
	OTHER_COLUMNS,
	OTHER_DATA,
};
