import { Layout, Menu as AntdMenu } from "antd";
import { To } from "react-router-dom";
import style from "./menu.module.scss";
import { useNavigate } from "react-router-dom";
import { ITEMS } from "./items.constant";

const { Sider } = Layout;

interface MenuProps {
	isDarkMode: boolean;
	collapsed: boolean;
}

const Menu: React.FC<MenuProps> = ({ collapsed }) => {
	const navigate = useNavigate();

	const onClick = (e: { key: To }) => {
		navigate(e.key);
	};

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={style.menu}
		>
			<AntdMenu mode="inline" onClick={onClick} items={ITEMS} />
		</Sider>
	);
};

export default Menu;
