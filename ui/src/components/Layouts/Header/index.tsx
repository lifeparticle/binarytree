import { Button, Space, theme } from "antd";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { classNames } from "lib/utils/helper";
import Icon from "components/General/Icon";

const Header: React.FC = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const contextValue = useContext(DarkModeContext);

	if (!contextValue) {
		return null;
	}

	const { isDarkMode } = contextValue;

	return (
		<Space
			style={{ backgroundColor: colorBgContainer, width: "100%" }}
			className={classNames(
				style.header,
				isDarkMode ? style.header_dark : style.header_light
			)}
		>
			<Button type="text">
				<Link to={"/"}>
					<Icon name="Hexagon" color={colorText} size={24} />
				</Link>
			</Button>
		</Space>
	);
};

export default Header;
