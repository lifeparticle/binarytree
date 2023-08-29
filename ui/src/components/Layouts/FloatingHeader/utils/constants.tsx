import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import Notification from "components/Layouts/FloatingHeader/components/Notification";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: <Link to="/about">About</Link>,
	},
];

const NotificationItems: MenuProps["items"] = [
	{
		key: "1",
		label: <Notification />,
	},
];

export { items, NotificationItems };
