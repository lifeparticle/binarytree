import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface FeatureType {
	id: number;
	icon: IconName;
	title: string;
	description: string;
}

export type { FeatureType };
