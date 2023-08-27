import { Menu as AntdMenu, Layout } from "antd";
import { To, useNavigate } from "react-router-dom";
import { ITEMS } from "./utils/constants";
import { MenuProps } from "./utils/types";
import style from "./Menu.module.scss";
import { classNames } from "lib/utils/helper";

const { Sider } = Layout;

const Menu: React.FC<MenuProps> = ({ collapsed }) => {
	const navigate = useNavigate();

	const onClick = (e: { key: To }) => {
		navigate(e.key);
	};

	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<AntdMenu
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
