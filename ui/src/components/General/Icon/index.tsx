import { icons } from "lucide-react";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ name, size = 18, color }) => {
	const LucideIcon = icons[name];

	return <LucideIcon strokeWidth="1.3" size={size} color={color} />;
};

export default Icon;
