import { routesById } from "data/routeData";

type HelpEntry = {
	description: string;
};

interface HelpType {
	[key: string]: HelpEntry;
}

const HELP: HelpType = {
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

export type { HelpEntry };
export { HELP, NO_PADDING, NO_TITLE };
