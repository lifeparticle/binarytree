import {
	ContainerOutlined,
	DesktopOutlined,
	PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

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

const items: MenuProps["items"] = [
	getItem("Image Generator From Colors", "/", <PieChartOutlined />),
	getItem("Sorting", "/sorting", <DesktopOutlined />),
	getItem("Color Picker", "/cp", <ContainerOutlined />),
	getItem("Markdown Editor", "/me", <ContainerOutlined />),
	getItem("Text Editor", "/te", <ContainerOutlined />),
	getItem("Icons", "/icons", <ContainerOutlined />),
	getItem("Data Generator", "/data_gen", <ContainerOutlined />),
	getItem("Base 64 Converter", "/base_64", <ContainerOutlined />),
	getItem("Pixel Converter", "/pixel_converter", <ContainerOutlined />),
	getItem("Table Of Content", "/toc", <ContainerOutlined />),
	getItem("Shade Generator", "/shades", <ContainerOutlined />),
	getItem("MD Table Generator", "/md_table_generator", <ContainerOutlined />),

	{ type: "divider" },
];

const Navigation: React.FC = () => {
	const navigate = useNavigate();

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e.key);
		navigate(e.key);
	};

	return (
		<Menu
			style={{ height: "100vh" }}
			onClick={onClick}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			items={items}
		/>
	);
};

export default Navigation;
