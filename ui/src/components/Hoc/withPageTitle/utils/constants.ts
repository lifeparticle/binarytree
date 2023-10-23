import { routesById } from "data/routeData";

type HelpEntry = {
	description: string;
};

interface Help {
	[key: string]: HelpEntry;
}

interface QueryParam {
	[key: string]: string;
}

interface BeamDetail {
	name?: string;
	url?: string;
	queryParams?: QueryParam[];
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

const BEAM: Beam = {
	[routesById.colorpicker.id]: [
		{ name: routesById.shadesandtints.title },
		{ url: routesById.shadesandtints.path },
		{ queryParams: [{ color: "color" }] },
	],
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

export type { HelpEntry };
export { HELP, NO_PADDING, NO_TITLE, BEAM };
