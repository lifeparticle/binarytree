import { Menu as AntdMenu, Layout } from "antd";
import { To, useNavigate } from "react-router-dom";
import { ITEMS } from "./utils/constant";
import { MenuProps } from "./utils/types";
import style from "./Menu.module.scss";
import { classNames } from "lib/utils/helper";

const { Sider } = Layout;

const Menu: React.FC<MenuProps> = ({ collapsed, isDarkMode }) => {
	const navigate = useNavigate();

	const onClick = (e: { key: To }) => {
		navigate(e.key);
	};

	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<AntdMenu
				className={classNames(
					style.menu,
					isDarkMode ? style.menu__dark : undefined
				)}
				mode="inline"
				onClick={onClick}
				items={ITEMS}
			/>
		</Sider>
	);
};

export default Menu;
