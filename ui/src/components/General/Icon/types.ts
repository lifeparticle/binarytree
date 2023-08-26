import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface IconProps {
	name: IconName;
	size?: number;
	color?: string;
}

export type { IconName, IconProps };
