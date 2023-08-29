import { Avatar, Dropdown, Space, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import { items } from "./utils/constants";
import Icon from "components/General/Icon";
import { Link } from "react-router-dom";

const FloatingHeader = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<Space
			className={style.fb}
			style={{
				backgroundColor: colorBgContainer,
			}}
		>
			<Link to={"/notification"} className={style.fb__item}>
				<Icon name="Bell" size={20} color={colorText} />
			</Link>

			<Dropdown menu={{ items }} placement="bottomLeft">
				<Avatar size="small" />
			</Dropdown>
		</Space>
	);
};

export default FloatingHeader;
