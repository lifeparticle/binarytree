import { routesById } from "data/routeData";

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
	"values.js": "https://www.npmjs.com/package/values.js",
	webfontloader: "https://www.npmjs.com/package/webfontloader",
	diff: "https://www.npmjs.com/package/diff",
	"@excalidraw/excalidraw":
		"https://www.npmjs.com/package/@excalidraw/excalidraw",
};

interface Feature {
	key: string;
	name: string;
	description: string;
	link: string;
	library: { name: string; url: string }[];
}

export const FEATURE_DATA: Feature[] = [
	{
		key: routesById.newsfeed.id,
		name: routesById.newsfeed.title,
		description: routesById.newsfeed.description,
		link: routesById.newsfeed.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.colorpicker.id,
		name: routesById.colorpicker.title,
		description: routesById.colorpicker.description,
		link: routesById.colorpicker.path,
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: routesById.shadesandtints.id,
		name: routesById.shadesandtints.title,
		description: routesById.shadesandtints.description,
		link: routesById.shadesandtints.path,
		library: [{ name: "values.js", url: LIBRARY_URLS["values.js"] }],
	},
	{
		key: routesById.borderradius.id,
		name: routesById.borderradius.title,
		description: routesById.borderradius.description,
		link: routesById.borderradius.path,
		library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	},
	// {
	// 	key: routesById.boxshadow.id,
	// 	name: routesById.boxshadow.title,
	// 	description: routesById.boxshadow.description,
	// 	link: routesById.boxshadow.path,
	// 	library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	// },
	{
		key: routesById.base64.id,
		name: routesById.base64.title,
		description: routesById.base64.description,
		link: routesById.base64.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.pixelconverter.id,
		name: routesById.pixelconverter.title,
		description: routesById.pixelconverter.description,
		link: routesById.pixelconverter.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.jsontotypescript.id,
		name: routesById.jsontotypescript.title,
		description: routesById.jsontotypescript.description,
		link: routesById.jsontotypescript.path,
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
		description: routesById.data.description,
		link: routesById.data.path,
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
		description: routesById.image.description,
		link: routesById.image.path,
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
		description: routesById.avatar.description,
		link: routesById.avatar.path,
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
		description: routesById.qrcode.description,
		link: routesById.qrcode.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},

	{
		key: routesById.editor.id,
		name: routesById.editor.title,
		description: routesById.editor.description,
		link: routesById.editor.path,
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
		description: routesById.table.description,
		link: routesById.table.path,
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
		description: routesById.tableofcontent.description,
		link: routesById.tableofcontent.path,
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
		description: routesById.texteditor.description,
		link: routesById.texteditor.path,
		library: [
			{
				name: "marked",
				url: LIBRARY_URLS["marked"],
			},
		],
	},
	{
		key: routesById.diagramming.id,
		name: routesById.diagramming.title,
		description: routesById.diagramming.description,
		link: routesById.diagramming.path,
		library: [
			{
				name: "@excalidraw/excalidraw",
				url: LIBRARY_URLS["@excalidraw/excalidraw"],
			},
		],
	},
	{
		key: routesById.svgformatter.id,
		name: routesById.svgformatter.title,
		description: routesById.svgformatter.description,
		link: routesById.svgformatter.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.sorting.id,
		name: routesById.sorting.title,
		description: routesById.sorting.description,
		link: routesById.sorting.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.diffchecker.id,
		name: routesById.diffchecker.title,
		description: routesById.diffchecker.description,
		link: routesById.diffchecker.path,
		library: [{ name: "diff", url: LIBRARY_URLS["diff"] }],
	},
	{
		key: routesById.mimetype.id,
		name: routesById.mimetype.title,
		description: routesById.mimetype.description,
		link: routesById.mimetype.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.npmpackages.id,
		name: routesById.npmpackages.title,
		description: routesById.npmpackages.description,
		link: routesById.npmpackages.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.blog.id,
		name: "Resource",
		description: "List of things",
		link: routesById.blog.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
];
