import type { MenuProps } from "antd";
import { NAV_ITEMS } from "./constants";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

export const items: MenuProps["items"] = [
	{ type: "divider" },
	...NAV_ITEMS.map((item) => {
		return getItem(
			item.name,
			item.name as React.Key,
			item.icon,
			item.children
				.filter((item) => item.show)
				.map((child: any) =>
					getItem(child.name, child.url as React.Key, child.icon)
				)
		);
	}),
];
