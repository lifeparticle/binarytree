import { Avatar, Button, Dropdown, Space, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import Icon from "components/General/Icon";
import { items } from "./utils/constants";
import { MenuProps } from "antd";
import Notification from "./components/Notification";

const FloatingHeader = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();
	const NotificationItems: MenuProps["items"] = [
		{
			key: "1",
			label: <Notification />,
		},
	];

	return (
		<Space
			className={style.fb}
			style={{
				backgroundColor: colorBgContainer,
			}}
		>
			<Dropdown
				menu={{ items: NotificationItems }}
				placement="bottomRight"
				arrow={{ pointAtCenter: true }}
				className={style.fb__notification}
			>
				<Button>
					<Icon name="Bell" size={20} color={colorText} />
				</Button>
			</Dropdown>

			<Dropdown
				menu={{ items }}
				placement="bottomLeft"
				arrow={{ pointAtCenter: true }}
				className={style.fb__about}
			>
				<Avatar size="small" />
			</Dropdown>
		</Space>
	);
};

export default FloatingHeader;
