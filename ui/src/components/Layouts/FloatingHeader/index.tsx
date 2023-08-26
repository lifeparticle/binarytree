import { Avatar, Dropdown, Space, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import { items } from "./utils/constants";
import Icon from "components/General/Icon";

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
			<Icon name="Bell" size={20} color={colorText} />
			<Dropdown menu={{ items }} placement="bottomLeft">
				<Avatar size="small" />
			</Dropdown>
		</Space>
	);
};

export default FloatingHeader;
