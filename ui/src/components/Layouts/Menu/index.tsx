import { Menu as AntdMenu, Layout } from "antd";
import { To, useNavigate } from "react-router-dom";
import { ITEMS } from "data/menuData";
import { MenuProps } from "./utils/types";
import style from "./Menu.module.scss";
import { classNames } from "utils/helper-functions/string";
import Icon from "components/General/Icon";

const { Sider } = Layout;

const Menu: React.FC<MenuProps> = ({ collapsed }) => {
	const navigate = useNavigate();

	const onClick = (e: { key: To }) => {
		navigate(e.key);
	};

	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<AntdMenu
				expandIcon={<Icon name="ChevronDown" />}
				className={classNames(
					style.menu,
					collapsed ? style.menu__collapsed : ""
				)}
				mode="inline"
				onClick={onClick}
				items={ITEMS}
				style={{
					minWidth: collapsed ? 0 : 250,
				}}
			/>
		</Sider>
	);
};

export default Menu;
