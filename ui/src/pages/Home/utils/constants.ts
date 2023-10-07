import { routesById } from "data/routeData";
import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface FeatureType {
	id: string;
	icon: IconName;
	title: string;
	description: string;
	link: string;
}

const FEATURES: FeatureType[] = [
	{
		id: routesById.colorpicker.id,
		title: routesById.colorpicker.title,
		icon: "Baseline",
		description: routesById.colorpicker.description,
		link: routesById.colorpicker.path,
	},
	{
		id: routesById.shadesandtints.id,
		title: routesById.shadesandtints.title,
		icon: "Layers",
		description: routesById.shadesandtints.description,
		link: routesById.shadesandtints.path,
	},
	{
		id: routesById.borderradius.id,
		title: routesById.borderradius.title,
		icon: "Square",
		description: routesById.borderradius.description,
		link: routesById.borderradius.path,
	},
	{
		id: routesById.tableofcontent.id,
		title: routesById.tableofcontent.title,
		icon: "Table",
		description: routesById.tableofcontent.description,
		link: routesById.tableofcontent.path,
	},
	{
		id: routesById.base64.id,
		title: routesById.base64.title,
		icon: "Replace",
		description: routesById.base64.description,
		link: routesById.base64.path,
	},
	{
		id: routesById.pixelconverter.id,
		title: routesById.pixelconverter.title,
		icon: "FileOutput",
		description: routesById.pixelconverter.description,
		link: routesById.pixelconverter.path,
	},
];

export { FEATURES };
