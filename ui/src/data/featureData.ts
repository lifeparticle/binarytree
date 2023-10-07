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
	shortDescription: string;
	fullDescription: string;
	link: string;
	library: { name: string; url: string }[];
}

export const FEATURE_DATA: Feature[] = [
	{
		key: routesById.newsfeed.id,
		name: routesById.newsfeed.title,
		shortDescription: routesById.newsfeed.description,
		fullDescription:
			"Dive into the digital developer universe with our Newsfeed feature at BinaryTree. Get your daily dose of developer news, hot off the press, tailored for you. Whether you are a coding maestro, a tech enthusiast, or a curious learner, stay ahead of the curve with articles, tutorials, and updates that keep you on the cutting edge of the programming landscape. We serve up bite-sized pieces of knowledge that fit your busy schedule. Say goodbye to endless scrolling and hello to targeted, informative content.",
		link: routesById.newsfeed.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.colorpicker.id,
		name: routesById.colorpicker.title,
		shortDescription: routesById.colorpicker.description,
		fullDescription:
			"Searching for the ideal color palette to make your website truly stand out? We've got you covered. Our Color Picker is your trusty palette, offering HEX, RGB, RGBA, HSL, HSLA formats and CSS variables. Time is money, and we know you've got code to conquer. That's why our Color Picker is lightning-fast and incredibly user-friendly. No more tiresome googling for color codes – it's all right here. Unleash your inner artist and paint your code canvas without any hitch.",
		link: routesById.colorpicker.path,
		library: [{ name: "tiny-color-2", url: LIBRARY_URLS["tiny-color-2"] }],
	},
	{
		key: routesById.shadesandtints.id,
		name: routesById.shadesandtints.title,
		shortDescription: routesById.shadesandtints.description,
		fullDescription:
			"Need that perfect gradient for your project? Adjust the shade percentage and conjure up color variations – because creativity should never be confined. Our Shades & Tints tool is designed to work as swiftly as your imagination, ensuring you spend less time tinkering with color shades and more time bringing your vision to life. Moreover, we've significantly enhanced your convenience through our Output Separator feature. Now, you can effortlessly obtain separate results using new lines, line commas, line spaces, and commas with strings.",
		link: routesById.shadesandtints.path,
		library: [{ name: "values.js", url: LIBRARY_URLS["values.js"] }],
	},
	{
		key: routesById.borderradius.id,
		name: routesById.borderradius.title,
		shortDescription: routesById.borderradius.description,
		fullDescription:
			"Round or square? Dotted or dashed? Vivid or monochrome? Customize your border styles and add a splash of color to make your website's edges as unique as your imagination. Generate border codes that match your creative vision with ease. It's the ultimate playground for crafting stylish CSS borders that elevate your web creations from mundane to magnificent.",
		link: routesById.borderradius.path,
		library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	},
	// {
	// 	key: routesById.boxshadow.id,
	// 	name: routesById.boxshadow.title,
	// 	shortDescription: routesById.boxshadow.description,
	// fullDescription: "",
	// 	link: routesById.boxshadow.path,
	// 	library: [{ name: "faker.js", url: LIBRARY_URLS["faker-js"] }],
	// },
	{
		key: routesById.base64.id,
		name: routesById.base64.title,
		shortDescription: routesById.base64.description,
		fullDescription:
			"Unlock the power of our Base64 tool, your gateway to effortlessly converting text to Base64 and vice versa. This invaluable resource is your ally in debugging and testing the decoding process, offering a deeper insight into the mechanics of Base64 decryption. It empowers you to decode with ease, discover the process, and enhance your understanding of Base64 decoding. Dive into a world of precision and clarity with this essential utility.",
		link: routesById.base64.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.pixelconverter.id,
		name: routesById.pixelconverter.title,
		shortDescription: routesById.pixelconverter.description,
		fullDescription:
			"Hasta la vista to tedious calculations. Let BinaryTree do the heavy lifting while you focus on making your design shine. Our Pixel Converter is your trusty companion for pixel-perfect precision that effortlessly transforms pixels into REM units and unveils the secrets of the base font size.  So, no more pixel-related headaches – it's all about easy conversions.",
		link: routesById.pixelconverter.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.jsontotypescript.id,
		name: routesById.jsontotypescript.title,
		shortDescription: routesById.jsontotypescript.description,
		fullDescription:
			"With our JSON to TypeScript converter, your development journey just got a turbo boost. Whether you're a code warrior on a mission or a developer with a passion for efficiency, our JSON to TypeScript converter is your secret weapon.",
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
		shortDescription: routesById.data.description,
		fullDescription: "",
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
		shortDescription: routesById.image.description,
		fullDescription: "",
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
		shortDescription: routesById.avatar.description,
		fullDescription: "",
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
		shortDescription: routesById.qrcode.description,
		fullDescription: "",
		link: routesById.qrcode.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},

	{
		key: routesById.editor.id,
		name: routesById.editor.title,
		shortDescription: routesById.editor.description,
		fullDescription: "",
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
		shortDescription: routesById.table.description,
		fullDescription: "",
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
		shortDescription: routesById.tableofcontent.description,
		fullDescription: "",
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
		shortDescription: routesById.texteditor.description,
		fullDescription: "",
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
		shortDescription: routesById.diagramming.description,
		fullDescription: "",
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
		shortDescription: routesById.svgformatter.description,
		fullDescription: "",
		link: routesById.svgformatter.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.sorting.id,
		name: routesById.sorting.title,
		shortDescription: routesById.sorting.description,
		fullDescription: "",
		link: routesById.sorting.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.diffchecker.id,
		name: routesById.diffchecker.title,
		shortDescription: routesById.diffchecker.description,
		fullDescription: "",
		link: routesById.diffchecker.path,
		library: [{ name: "diff", url: LIBRARY_URLS["diff"] }],
	},
	{
		key: routesById.mimetype.id,
		name: routesById.mimetype.title,
		shortDescription: routesById.mimetype.description,
		fullDescription: "",
		link: routesById.mimetype.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.npmpackages.id,
		name: routesById.npmpackages.title,
		shortDescription: routesById.npmpackages.description,
		fullDescription: "",
		link: routesById.npmpackages.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.blog.id,
		name: "Resource",
		shortDescription: "List of things",
		fullDescription: "",
		link: routesById.blog.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
];
