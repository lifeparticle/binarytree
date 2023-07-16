import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { items } from "./data";
import style from "./navigation.module.scss";

const Navigation: React.FC = () => {
	const navigate = useNavigate();

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e.key);
		navigate(e.key);
	};

	return (
		<Menu
			className={style.menuBar}
			onClick={onClick}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			items={items}
		/>
	);
};

export default Navigation;
