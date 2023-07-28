import { Menu as AntdMenu, Layout } from "antd";
import { To, useNavigate } from "react-router-dom";
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
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<AntdMenu
				style={{ borderInlineEnd: "none" }}
				mode="inline"
				onClick={onClick}
				items={ITEMS}
			/>
		</Sider>
	);
};

export default Menu;
