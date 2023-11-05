import { MenuProps } from "antd";
import { Icon, IconName } from "components/General";

type MenuItem = Required<MenuProps>["items"][number];

export const getItem = (
	label: React.ReactNode,
	key: React.Key,
	name: IconName,
	children?: MenuItem[],
	type?: "group"
): MenuItem => {
	return {
		key,
		icon: <Icon name={name} size={16} />,
		children,
		label,
		type,
	} as MenuItem;
};
