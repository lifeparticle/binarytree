import { RouteId, routesById } from "data/routeData";

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
	"js-beautify": "https://www.npmjs.com/package/js-beautify",
	"@monaco-editor/react":
		"https://www.npmjs.com/package/@monaco-editor/react",
	"@ffmpeg/ffmpeg": "https://www.npmjs.com/package/@ffmpeg/ffmpeg",
	"@ffmpeg/util": "https://www.npmjs.com/package/@ffmpeg/util",
};

interface Feature {
	key: RouteId;
	name: string;
	shortDescription: string;
	fullDescription: string;
	link: string;
	library: { name: string; url: string }[];
	in_progress?: boolean;
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
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.boxshadow.id,
		name: routesById.boxshadow.title,
		shortDescription: routesById.boxshadow.description,
		fullDescription:
			"Shape your vision into reality by customizing Box Shadows with precision. Define the dimensions, tweak lengths, play with colors, and set radius blur and spread radius - all with a spontaneous interface. Instantly visualize the impact of your design choices and seamlessly generate the corresponding code.",
		link: routesById.boxshadow.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.flexboxgenerator.id,
		name: routesById.flexboxgenerator.title,
		shortDescription: routesById.flexboxgenerator.description,
		fullDescription:
			"Arrange your items inside your container element as like as you want.",
		link: routesById.flexboxgenerator.path,
		library: [{ name: "Vanilla JS", url: "" }],
		in_progress: true,
	},
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
		key: routesById.fileconverter.id,
		name: routesById.fileconverter.title,
		shortDescription: routesById.fileconverter.description,
		fullDescription:
			"Transform your work by quickly uploading and converting supported files into miscellaneous formats. Whether you're converting audio, or image, files, our platform streamlines the process, saving you valuable time.",
		link: routesById.fileconverter.path,
		library: [
			{
				name: "FFmpeg",
				url: LIBRARY_URLS["@ffmpeg/ffmpeg"],
			},
			{
				name: "Fmpeg Util",
				url: LIBRARY_URLS["@ffmpeg/util"],
			},
		],
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
		key: routesById.svg.id,
		name: routesById.svg.title,
		shortDescription: routesById.svg.description,
		fullDescription:
			"Modify your vision into reality by inputting SVG values, and watch as it crafts stunning SVGs tailored to your specifications. Our SVG tool ensures a flawless experience, saving you time and enhancing your development process.",
		link: routesById.svg.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.data.id,
		name: routesById.data.title,
		shortDescription: routesById.data.description,
		fullDescription:
			"Tired of drowning in a sea of SQL queries and JSON formatting? Fear not, intrepid coder. Our time-saving magic allows you to effortlessly conjure SQL and JSON snippets with just a few clicks. Toss in your Table Name, Column Number, Row Number, and a sprinkle of other variables, and voila! Just hit 'Generate' and watch as our magic unfolds. We save you time and spare you from the agony of manual coding.",
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
		key: routesById.imagegeneratorfromcolors.id,
		name: routesById.imagegeneratorfromcolors.title,
		shortDescription: routesById.imagegeneratorfromcolors.description,
		fullDescription:
			"Enter the pixel-perfect realm of binarytree.dev, where innovation meets imagination with our dazzling 'Image' feature. We're not just keeping up with the code; we're painting the future of developer productivity. 'Image' is your digital paintbrush, turning code into a visual masterpiece. So, grab your creative cap, embrace the pixels, and let 'Image' be your canvas for coding wonders.",
		link: routesById.imagegeneratorfromcolors.path,
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
		fullDescription:
			'Join the "Avatar: The Way of Coder" revolution and transform your code into a visual symphony. Let your creativity fly with a symphony of customization options – choose your text color to reflect the mood of your code, set a background hue that resonates with your programming vibe, pick a font style that showcases your coding charisma, tailor your avatar\'s size and shape to match the grandeur of your coding prowess. Cherry on top, you can download your creation in PNG format, turning your coding masterpiece into a shareable work of art',
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
		fullDescription:
			"We bring this tool to craft custom QR codes that not only transmit information but do so with style and flair. Effortlessly encode URLs, contact details, or any data you desire. Customize your QR code's color palette to match your brand aesthetic, and play with background hues to make it a visual wonder. Scale your QR code to perfection, from petite secrets to grand revelations. Lastly, add a sleek border to frame your digital message, turning every QR code into a work of art that demands attention. What's more, save your bespoke QR code in PNG format.",
		link: routesById.qrcode.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.csharpbuilder.id,
		name: routesById.csharpbuilder.title,
		shortDescription: routesById.csharpbuilder.description,
		fullDescription:
			'Feel the power of precision coding with "C# Builder". Craft impeccable C# code effortlessly, as this feature empowers developers to streamline their projects with finesse. Stay ahead in the coding game with a tool designed to elevate your C# building experience.',
		link: routesById.csharpbuilder.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.editor.id,
		name: routesById.editor.title,
		shortDescription: routesById.editor.description,
		fullDescription:
			"Transform your ideas into stunning content effortlessly with our Editor tool. Enjoy the flexibility to download your creations in Markdown and HTML, empowering you to share your work across platforms smoothly. Simplify collaboration, and save time on formatting.",
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
		fullDescription:
			"Craft tables that fluently integrate into your projects with Table. Our user-friendly interface allows you to draw spreadsheet-like tables in a snap. Whether you're documenting, coding, or presenting data, our feature ensures precision and easefulness.",
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
		fullDescription:
			"Simply input a URL and unlock a streamlined presentation of webpage content. Instantly generate an organized table of contents outlining the page's structure, making information retrieval a breeze.",
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
		fullDescription:
			"A versatile text editor that supports various formatting options. Ideal for drafting and editing text with the ability to preview the output in real-time. It also supports markdown, providing a seamless writing experience for both plain text and formatted content.",
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
		fullDescription:
			'No wonder it would be super awesome if you could illustrate complex ideas effortlessly and stay ahead in the ever-evolving world of coding. With the "Diagramming" tool, you can easily map out your code architecture, workflows, and concepts. Our user-friendly interface empowers developers to create stunning, professional diagrams in minutes. Literally.',
		link: routesById.diagramming.path,
		library: [
			{
				name: "@excalidraw/excalidraw",
				url: LIBRARY_URLS["@excalidraw/excalidraw"],
			},
		],
	},
	{
		key: routesById.sorting.id,
		name: routesById.sorting.title,
		shortDescription: routesById.sorting.description,
		fullDescription:
			"Simplify data organization with our Sorting feature. Whether dealing with lists, arrays, or datasets, effortlessly arrange your information in perfect order. Input your data and seamlessly sort it precisely - ascending or descending, tailored to your needs. Our tool goes beyond the basics, allowing you to customize results by lines, commas, or spaces for ultimate flexibility. Instantly transform chaos into clarity as you obtain a neatly sorted output.",
		link: routesById.sorting.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.progressivewebapp.id,
		name: routesById.progressivewebapp.title,
		shortDescription: routesById.progressivewebapp.description,
		fullDescription:
			"Convert your website into a Progressive Web App (PWA) and enjoy the best of both worlds. Our feature allows you to transform your website into a mobile app and reap the benefits of both platforms. It's the ultimate solution for developers keen on enhancing user experience and boosting engagement.",
		link: routesById.progressivewebapp.path,
		library: [
			{
				name: "Monaco Editor",
				url: LIBRARY_URLS["@monaco-editor/react"],
			},
		],
	},
	{
		key: routesById.diffchecker.id,
		name: routesById.diffchecker.title,
		shortDescription: routesById.diffchecker.description,
		fullDescription:
			'Compare the dissimilarities between your original and modified text, fluently identifying changes with a glance. "Diffchecker" highlights additions, deletions, and modifications, empowering developers to review edits swiftly. Enhance collaboration, streamline version control, and ensure accuracy in your code or content.',
		link: routesById.diffchecker.path,
		library: [{ name: "diff", url: LIBRARY_URLS["diff"] }],
	},
	{
		key: routesById.codeformatter.id,
		name: routesById.codeformatter.title,
		shortDescription: routesById.codeformatter.description,
		fullDescription:
			"No more manual formatting struggles. It's time for clean, professionally styled code. Whether you're working in HTML, CSS, JSON, JavaScript or YAML language, our \"Code Formatter\" streamlines your workflow, saving you time and headaches. A well-formatted code is not just a luxury but a necessity for every developer on the path to glory",
		link: routesById.codeformatter.path,
		library: [
			{
				name: "Monaco Editor",
				url: LIBRARY_URLS["@monaco-editor/react"],
			},
			{
				name: "js-beautify",
				url: LIBRARY_URLS["js-beautify"],
			},
		],
	},
	{
		key: routesById.githubissue.id,
		name: routesById.githubissue.title,
		shortDescription: routesById.githubissue.description,
		fullDescription:
			"Streamline issue tracking and enhance collaboration with our Create GitHub Issue feature. Bridge the gap between development and project management by effortlessly generating GitHub issues directly from our platform. It saves time and helps you focus on what truly matters in your marvelous project",
		link: routesById.githubissue.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.mimetype.id,
		name: routesById.mimetype.title,
		shortDescription: routesById.mimetype.description,
		fullDescription:
			"A comprehensive table detailing file extensions ('Name'), examples with descriptions ('Example'), and mime-types ('JavaScript code') with a 'Copy to Clipboard' feature. It also includes a search bar for easy navigation by name or content type—a must-have tool for API  developers and a quick reference guide for curious minds.",
		link: routesById.mimetype.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.npmpackages.id,
		name: routesById.npmpackages.title,
		shortDescription: routesById.npmpackages.description,
		fullDescription:
			"Npm Packages tracks the latest version numbers of popular npm packages. It's a tool for developers keen on staying ahead with the newest package versions in the ever-evolving world of JavaScript.",
		link: routesById.npmpackages.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
	{
		key: routesById.blog.id,
		name: "Resource",
		shortDescription: "List of things",
		fullDescription:
			"Uplift your coding journey with a curated collection of courses, blogs, YouTube channels, interviews, movies, platforms, blogs, and more - all handpicked to enrich your software development expertise. Discover a one-stop hub where valuable insights and educational gems await. Fuel your passion for coding and unlock a universe of knowledge.",
		link: routesById.blog.path,
		library: [{ name: "Vanilla JS", url: "" }],
	},
];

export const featuresById = FEATURE_DATA.reduce((acc, feature) => {
	acc[feature.key] = feature;
	return acc;
}, {} as Record<RouteId, Feature>);
