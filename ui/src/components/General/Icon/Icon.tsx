import { FC } from "react";
import { icons } from "lucide-react";

const DEFAULT_ICON_NAME = "AlertCircle";

export type IconName = keyof typeof icons;

interface IconProps {
	name: IconName;
	size?: number;
	color?: string;
	className?: string;
	strokeWidth?: string;
}

const Icon: FC<IconProps> = ({
	name,
	size = 18,
	color,
	className,
	strokeWidth = "1.3",
}) => {
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

	return (
		<LucideIcon
			strokeWidth={strokeWidth}
			size={size}
			color={color}
			className={className}
		/>
	);
};

export default Icon;
