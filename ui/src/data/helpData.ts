import { routesById } from "data/routeData";

type HelpEntry = {
	description: string;
};

interface Help {
	[key: string]: HelpEntry;
}

const HELP: Help = {
	[routesById.colorpicker.id]: {
		description: "Color generator tool",
	},
	[routesById.shadesandtints.id]: {
		description: "Color generator tool",
	},
};

export type { HelpEntry };
export { HELP };
