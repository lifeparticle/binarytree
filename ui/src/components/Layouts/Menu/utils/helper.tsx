import { MenuProps } from "antd";
import Icon from "components/General/Icon";
import { IconName } from "components/General/Icon/utils/types";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
	label: React.ReactNode,
	key: React.Key,
	name: IconName,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon: <Icon name={name} size={16} />,
		children,
		label,
		type,
	} as MenuItem;
}
