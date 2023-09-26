import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface FeatureType {
	id: string;
	icon: IconName;
	title: string;
	description: string;
	link: string;
}

export type { FeatureType };
