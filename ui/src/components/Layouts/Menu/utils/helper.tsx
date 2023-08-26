import { MenuProps } from "antd";
<<<<<<< HEAD
import { IconComponentType } from "./constants";
=======
import Icon from "components/General/Icon";
import { IconName } from "components/General/Icon/types";
>>>>>>> upstream/main

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
