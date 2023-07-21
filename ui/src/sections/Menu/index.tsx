import { Layout, Menu as AntdMenu, Button } from "antd";
import { ArrowLeftFromLine, ArrowRightFromLine, Hexagon } from "lucide-react";
import { Link, To } from "react-router-dom";
import style from "./menu.module.scss";
import { useNavigate } from "react-router-dom";
import { ITEMS } from "./items.constant";

const { Sider } = Layout;

interface MenuProps {
	isDarkMode: boolean;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ collapsed, setCollapsed }) => {
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
			<div className={style.menu_top}>
				<Link to={"/"}>
					<Hexagon size={32} />
				</Link>

				<Button onClick={() => setCollapsed(!collapsed)}>
					{collapsed ? (
						<ArrowRightFromLine size={12} />
					) : (
						<ArrowLeftFromLine size={12} />
					)}
				</Button>
			</div>

			<AntdMenu mode="inline" onClick={onClick} items={ITEMS} />
		</Sider>
	);
};

export default Menu;
