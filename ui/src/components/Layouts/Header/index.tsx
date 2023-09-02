import { Space, theme } from "antd";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { classNames } from "lib/utils/helper";
import Icon from "components/General/Icon";
import { ResponsiveButton } from "components/General/FormComponents";

const Header: React.FC = () => {
	const {
		token: { colorBgContainer, colorText },
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
			<ResponsiveButton type="text">
				<Link to={"/"}>
					<Icon name="Hexagon" color={colorText} size={24} />
				</Link>
			</ResponsiveButton>
		</Space>
	);
};

export default Header;
