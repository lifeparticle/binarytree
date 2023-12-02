import { Space, theme } from "antd";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { classNames } from "utils/helper-functions/string";
import logo_light from "assets/Sidebar/logo_light.svg";
import logo_dark from "assets/Sidebar/logo_dark.svg";
import { useMode } from "hooks";
import { FC } from "react";

const Header: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { isDarkMode } = useMode();

	return (
		<Space
			style={{ backgroundColor: colorBgContainer, width: "100%" }}
			className={classNames(
				style.header,
				isDarkMode ? style.header_dark : style.header_light
			)}
		>
			<Link to="/">
				<img
					src={isDarkMode ? logo_dark : logo_light}
					height={60}
					width={60}
					alt="Logo"
				/>
			</Link>
		</Space>
	);
};

export default Header;
