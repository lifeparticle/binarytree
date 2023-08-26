import { Avatar, Dropdown, Space, theme } from "antd";
import { BellIcon } from "lucide-react";
import style from "./FloatingHeader.module.scss";
import { items } from "./utils/constants";

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
			<BellIcon size={20} color={colorText} strokeWidth="1.3" />
			<Dropdown menu={{ items }} placement="bottomLeft">
				<Avatar size="small" />
			</Dropdown>
		</Space>
	);
};

export default FloatingHeader;
