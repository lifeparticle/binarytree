import { Layout, Switch, Button, theme } from "antd";
import { Moon, Sun } from "lucide-react";
import style from "./header.module.scss";
import { ArrowLeftFromLine, ArrowRightFromLine, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { MOBILE_WIDTH } from "App";
const { Header: AntHeader } = Layout;

interface HeaderProps {
	handleThemeChange: (checked: boolean) => void;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
	windowWidth: number;
}

const Header: React.FC<HeaderProps> = ({
	handleThemeChange,
	collapsed,
	setCollapsed,
	windowWidth,
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
				{windowWidth <= MOBILE_WIDTH ? null : (
					<Button
						onClick={() => setCollapsed(!collapsed)}
						type="text"
					>
						{collapsed ? (
							<ArrowRightFromLine color={colorText} />
						) : (
							<ArrowLeftFromLine color={colorText} />
						)}
					</Button>
				)}
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
