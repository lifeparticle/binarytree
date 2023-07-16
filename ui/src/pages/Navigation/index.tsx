import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { items } from "./data";

const Navigation: React.FC = () => {
	const navigate = useNavigate();

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e.key);
		navigate(e.key);
	};

	return (
		<Menu
			style={{ minHeight: "calc(100vh - 100px)", borderRight: "none" }}
			onClick={onClick}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			items={items}
		/>
	);
};

export default Navigation;
