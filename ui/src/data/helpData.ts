import { routesById } from "data/routeData";
import { featuresById } from "./featureData";

type HelpEntry = {
	description: string;
	helpTexts: { id: string; title: string; bulletPoints: string[] }[];
};

interface Help {
	[key: string]: HelpEntry;
}

const HELP: Help = {
	[routesById.colorpicker.id]: {
		description: featuresById.colorpicker.fullDescription,
		helpTexts: [
			{
				id: "1",
				title: "Formats Galore",
				bulletPoints: [
					"Our Color Picker speaks your language! Choose your preferred formats - HEX, RGB, RGBA, HSL, HSLA",
				],
			},
			{
				id: "2",
				title: "Colors",
				bulletPoints: [
					"Copy your desired color in HEX, HEX8, RGB, RGBA, HSL, HSLA",
				],
			},
			{
				id: "3",
				title: "CSS variables",
				bulletPoints: [
					"You can also copy your desired color in CSS variables, providing you with a consistent and efficient way to manage your color scheme.",
				],
			},
			{
				id: "4",
				title: "Use CSS variables",
				bulletPoints: [
					"We show you how to use CSS variables in your CSS and JS",
				],
			},
			{
				id: "5",
				title: "Copy All",
				bulletPoints: ["Save time and copy all your colors in one go!"],
			},
			{
				id: "6",
				title: "Beam it!",
				bulletPoints: ["Beam your color to your other features!"],
			},
		],
	},
	[routesById.shadesandtints.id]: {
		description: featuresById.shadesandtints.fullDescription,
		helpTexts: [
			{
				id: "7",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.borderradius.id]: {
		description: featuresById.borderradius.fullDescription,
		helpTexts: [
			{
				id: "8",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.boxshadow.id]: {
		description: featuresById.boxshadow.fullDescription,
		helpTexts: [
			{
				id: "9",
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
				id: "10",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.fileconverter.id]: {
		description: featuresById.fileconverter.fullDescription,
		helpTexts: [
			{
				id: "11",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.pixelconverter.id]: {
		description: featuresById.pixelconverter.fullDescription,
		helpTexts: [
			{
				id: "12",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.jsontotypescript.id]: {
		description: featuresById.jsontotypescript.fullDescription,
		helpTexts: [
			{
				id: "13",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.svg.id]: {
		description: featuresById.svg.fullDescription,
		helpTexts: [
			{
				id: "14",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.data.id]: {
		description: featuresById.data.fullDescription,
		helpTexts: [
			{
				id: "15",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.imagegeneratorfromcolors.id]: {
		description: featuresById.imagegeneratorfromcolors.fullDescription,
		helpTexts: [
			{
				id: "16",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.avatar.id]: {
		description: featuresById.avatar.fullDescription,
		helpTexts: [
			{
				id: "17",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.qrcode.id]: {
		description: featuresById.qrcode.fullDescription,
		helpTexts: [
			{
				id: "18",
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
				id: "19",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.table.id]: {
		description: featuresById.table.fullDescription,
		helpTexts: [
			{
				id: "20",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tableofcontent.id]: {
		description: featuresById.tableofcontent.fullDescription,
		helpTexts: [
			{
				id: "21",
				title: "Get URL from GitHub",
				bulletPoints: [
					"Navigate to your markdown file and copy the raw URl",
				],
			},
			{
				id: "22",
				title: "Example URL",
				bulletPoints: ["Press cmd + e on mac or ctrl + e on windows"],
			},
		],
	},
	[routesById.texteditor.id]: {
		description: featuresById.texteditor.fullDescription,
		helpTexts: [
			{
				id: "23",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.diagramming.id]: {
		description: featuresById.diagramming.fullDescription,
		helpTexts: [
			{
				id: "24",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.sorting.id]: {
		description: featuresById.sorting.fullDescription,
		helpTexts: [
			{
				id: "25",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.diffchecker.id]: {
		description: featuresById.diffchecker.fullDescription,
		helpTexts: [
			{
				id: "26",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.progressivewebapp.id]: {
		description: featuresById.progressivewebapp.fullDescription,
		helpTexts: [
			{
				id: "27",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.codeformatter.id]: {
		description: featuresById.codeformatter.fullDescription,
		helpTexts: [
			{
				id: "28",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.githubissue.id]: {
		description: featuresById.githubissue.fullDescription,
		helpTexts: [
			{
				id: "29",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.mimetype.id]: {
		description: featuresById.mimetype.fullDescription,
		helpTexts: [
			{
				id: "30",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.npmpackages.id]: {
		description: featuresById.npmpackages.fullDescription,
		helpTexts: [
			{
				id: "31",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.ai.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "32",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.blog.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "33",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.book.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "34",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.course.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "35",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.designsystem.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "36",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.github.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "37",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.icon.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "38",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.interview.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "39",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.movie.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "40",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.platform.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "41",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.plugin.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "42",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.survey.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "43",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tool.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "44",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.tvseries.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "45",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.uiux.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "46",
				title: "",
				bulletPoints: [],
			},
		],
	},
	[routesById.youtube.id]: {
		description: featuresById.blog.fullDescription,
		helpTexts: [
			{
				id: "47",
				title: "",
				bulletPoints: [],
			},
		],
	},
};

export type { HelpEntry };
export { HELP };
