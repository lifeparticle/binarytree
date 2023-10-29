import { routesById } from "data/routeData";
import { featuresById } from "./featureData";

type HelpEntry = {
	description: string;
	helpTexts: { title: string; bulletPoints: string[] }[];
};

interface Help {
	[key: string]: HelpEntry;
}

const HELP: Help = {
	[routesById.colorpicker.id]: {
		description: featuresById.colorpicker.fullDescription,
		helpTexts: [
			{
				title: "Formats Galore",
				bulletPoints: [
					"Our Color Picker speaks your language! Choose your preferred formats - HEX, RGB, RGBA, HSL, HSLA",
				],
			},
			{
				title: "Colors",
				bulletPoints: [
					"Copy your desired color in HEX, HEX8, RGB, RGBA, HSL, HSLA",
				],
			},
			{
				title: "CSS variables",
				bulletPoints: [
					"You can also copy your desired color in CSS variables, providing you with a consistent and efficient way to manage your color scheme.",
				],
			},
			{
				title: "Use CSS variables",
				bulletPoints: [
					"We show you how to use CSS variables in your CSS and JS",
				],
			},
			{
				title: "Copy All",
				bulletPoints: ["Save time and copy all your colors in one go!"],
			},
			{
				title: "Beam it!",
				bulletPoints: ["Beam your color to your other features!"],
			},
		],
	},
	[routesById.shadesandtints.id]: {
		description: featuresById.shadesandtints.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.borderradius.id]: {
		description: featuresById.borderradius.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.boxshadow.id]: {
		description: featuresById.boxshadow.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	// [routesById.units.id]: {
	// 	description: featuresById.units.fullDescription,
	// 	helpTexts: [
	// 		{
	// 			title: "",
	// 			bulletPoints: [],
	// 		},
	// 	],
	// },
	[routesById.base64.id]: {
		description: featuresById.base64.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	// [routesById.imageconverter.id]: {
	// 	description: featuresById.imageconverter.fullDescription,
	// 	helpTexts: [
	// 		{
	// 			title: "",
	// 			bulletPoints: [],
	// 		},
	// 	],
	// },
	[routesById.pixelconverter.id]: {
		description: featuresById.pixelconverter.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.jsontotypescript.id]: {
		description: featuresById.jsontotypescript.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.svg.id]: {
		description: featuresById.svg.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.data.id]: {
		description: featuresById.data.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.imagegeneratorfromcolors.id]: {
		description: featuresById.imagegeneratorfromcolors.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.avatar.id]: {
		description: featuresById.avatar.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.qrcode.id]: {
		description: featuresById.qrcode.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	// [routesById.docs.id]: {
	// 	description: featuresById.docs.fullDescription,
	// 	helpTexts: [
	// 		{
	// 			title: "",
	// 			bulletPoints: [],
	// 		},
	// 	],
	// },
	[routesById.editor.id]: {
		description: featuresById.editor.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.table.id]: {
		description: featuresById.table.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tableofcontent.id]: {
		description: featuresById.tableofcontent.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.texteditor.id]: {
		description: featuresById.texteditor.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.diagramming.id]: {
		description: featuresById.diagramming.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.sorting.id]: {
		description: featuresById.sorting.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.diffchecker.id]: {
		description: featuresById.diffchecker.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.codeformatter.id]: {
		description: featuresById.codeformatter.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.githubissue.id]: {
		description: featuresById.githubissue.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.mimetype.id]: {
		description: featuresById.mimetype.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.npmpackages.id]: {
		description: featuresById.npmpackages.fullDescription,
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.blog.id]: {
		description: "Blog",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.book.id]: {
		description: "Book",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.course.id]: {
		description: "Course",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.designsystem.id]: {
		description: "Design System",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.github.id]: {
		description: "Github",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.icon.id]: {
		description: "Icon",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.interview.id]: {
		description: "Interview",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.movie.id]: {
		description: "Movie",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.platform.id]: {
		description: "Platform",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.plugin.id]: {
		description: "Plugin",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tool.id]: {
		description: "Tool",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tvseries.id]: {
		description: "TV Series",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.uiux.id]: {
		description: "UI/UX",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.youtube.id]: {
		description: "Youtube",
		helpTexts: [
			{
				title: "",
				bulletPoints: [],
			},
		],
	},
};

export type { HelpEntry };
export { HELP };
