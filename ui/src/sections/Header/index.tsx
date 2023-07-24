import { Button, Layout, Switch, theme } from "antd";
import {
	ArrowLeftFromLine,
	ArrowRightFromLine,
	Hexagon,
	Moon,
	Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
const { Header: AntHeader } = Layout;

interface HeaderProps {
	handleThemeChange: (checked: boolean) => void;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
	handleThemeChange,
	collapsed,
	setCollapsed,
}) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<AntHeader
			className={style.header}
			style={{ background: colorBgContainer }}
		>
			<div className={style.header_left}>
				<Button type="text">
					<Link to={"/"}>
						<Hexagon color={colorText} />
					</Link>
				</Button>

				<Button
					onClick={() => setCollapsed(!collapsed)}
					type="text"
					className={style.header_left_collapseBtn}
				>
					{collapsed ? (
						<ArrowRightFromLine color={colorText} />
					) : (
						<ArrowLeftFromLine color={colorText} />
					)}
				</Button>
			</div>
			<Switch
				className={style.header_switch}
				checkedChildren={<Moon size={16} color={colorBgContainer} />}
				unCheckedChildren={<Sun size={16} />}
				onChange={handleThemeChange}
				style={{ backgroundColor: colorText }}
			/>
		</AntHeader>
	);
};

export default Header;
