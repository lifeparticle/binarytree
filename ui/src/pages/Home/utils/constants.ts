import { FEATURE_DATA } from "pages/About/utils/constants";
import base64 from "assets/home/avatar.gif";
import { FeatureType } from "./types";

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
		id: 1,
		title: "Color Picker",
		icon: "Baseline",
		description: "Choose you desired color as per your choice",
	},
	{
		id: 2,
		title: "Shades and tints",
		icon: "Layers",
		description: "Choose your different types of shades",
	},
	{
		id: 3,
		title: "Border radius",
		icon: "Square",
		description: "Shape up your CSS with some smooth curves.",
	},
	{
		id: 4,
		title: "Box Shadow",
		icon: "Box",
		description: "Add drama to your box! Shadows included.",
	},
	{
		id: 5,
		title: "Base64 converter",
		icon: "Replace",
		description: "Encode, decode, and party in Base64 style.",
	},
	{
		id: 6,
		title: "Pixel converter",
		icon: "FileOutput",
		description: "Pixels to units - like magic, but real!",
	},
];

export { SEGMENTED_OPTIONS, DESCRIPTIONS, FEATURES };
