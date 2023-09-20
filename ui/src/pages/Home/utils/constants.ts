import { FEATURE_DATA } from "pages/About/utils/constants";
import base64 from "assets/home/avatar.gif";

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

export { SEGMENTED_OPTIONS, DESCRIPTIONS };
