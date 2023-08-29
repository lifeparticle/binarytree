import React from "react";
import { icons } from "lucide-react";
import { IconProps } from "./utils/types";
import { DEFAULT_ICON_NAME } from "./utils/constants";

const Icon: React.FC<IconProps> = ({ name, size = 18, color }) => {
	let LucideIcon = icons[name];

	if (!LucideIcon) {
		console.error(
			`Icon with name "${name}" does not exist. Using default icon.`
		);
		LucideIcon = icons[DEFAULT_ICON_NAME];

		if (!LucideIcon) {
			console.error(
				`Default icon "${DEFAULT_ICON_NAME}" also does not exist.`
			);
			return null;
		}
	}

	return <LucideIcon strokeWidth="1.3" size={size} color={color} />;
};

export default Icon;
