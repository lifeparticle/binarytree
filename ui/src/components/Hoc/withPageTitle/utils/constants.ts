import { routesById } from "data/routeData";

type HelpEntry = {
	description: string;
};

interface Help {
	[key: string]: HelpEntry;
}

interface MapDetail {
	from: string;
	to: string;
}

interface QueryParamDetail {
	map: MapDetail;
}

interface BeamDetail {
	name: string;
	url: string;
	queryParams: QueryParamDetail[];
}

interface Beam {
	[key: string]: BeamDetail[];
}

const HELP: Help = {
	[routesById.colorpicker.id]: {
		description: "Color generator tool",
	},
	[routesById.shadesandtints.id]: {
		description: "Color generator tool",
	},
};

const NO_PADDING = [
	"BinaryTree: Developer Productivity Tools",
	"About",
	"Terms",
	"Cookie Policy",
	"Privacy Policy",
	"Feedback",
];

const NO_TITLE = [
	"BinaryTree: Developer Productivity Tools",
	"Terms",
	"Cookie Policy",
	"Privacy Policy",
	"About",
	"Feedback",
];

const BEAM: Beam = {
	[routesById.colorpicker.id]: [
		{
			name: routesById.shadesandtints.title,
			url: routesById.shadesandtints.path,
			queryParams: [{ map: { from: "color", to: "color" } }],
		},
	],
	[routesById.shadesandtints.id]: [
		{
			name: routesById.colorpicker.title,
			url: routesById.colorpicker.path,
			queryParams: [{ map: { from: "color", to: "color" } }],
		},
	],
};

export type { HelpEntry, BeamDetail, Beam, QueryParamDetail };
export { HELP, NO_PADDING, NO_TITLE, BEAM };
