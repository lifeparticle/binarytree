import { Space, theme } from "antd";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { classNames } from "lib/utils/helper";
import logo_light from "assets/logo_light.svg";
import logo_dark from "assets/logo_dark.svg";

const Header: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { isDarkMode } = useContext(DarkModeContext);

	return (
		<Space
			style={{ backgroundColor: colorBgContainer, width: "100%" }}
			className={classNames(
				style.header,
				isDarkMode ? style.header_dark : style.header_light
			)}
		>
			<Link to={"/"}>
				<img
					src={isDarkMode ? logo_dark : logo_light}
					height={60}
					width={60}
				/>
			</Link>
		</Space>
	);
};

export default Header;
