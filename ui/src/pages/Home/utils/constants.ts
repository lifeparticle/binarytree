import { FEATURE_DATA } from "pages/About/utils/constants";
import base64 from "assets/home/avatar.gif";
import { FeatureType } from "./types";
import { routesById } from "pages/Routes/utils/constant";

interface DescriptionType {
	description: string;
	image: string;
}

const VALUES = ["avatar", "shadesandtints", "toc"];

const LABELS: Record<string, string> = {
	avatar: "Base64",
	shadesandtints: "Shades & Tints",
	toc: "Table of Content",
};

const IMAGES: Record<string, string> = {
	base64,
	shadesandtints: base64,
	toc: base64,
};

const DESCRIPTIONS: Record<string, DescriptionType> = {
	avatar: { description: FEATURE_DATA[10].description, image: IMAGES.base64 },
	shadesandtints: {
		description: FEATURE_DATA[2].description,
		image: IMAGES.shadesandtints,
	},
	toc: { description: FEATURE_DATA[16].description, image: IMAGES.toc },
};

const SEGMENTED_OPTIONS = VALUES.map((value) => ({
	label: LABELS[value],
	value,
}));

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

export { SEGMENTED_OPTIONS, DESCRIPTIONS, FEATURES };
