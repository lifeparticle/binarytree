import { MenuProps } from "antd";
import { Link } from "react-router-dom";

const DEFAULT_RECORD = [
	{
		date: "01.01.23",
		version: "1.1.1",
		features: ["start"],
	},
];
const items: MenuProps["items"] = [
	{
		key: "1",
		label: <Link to="/about">About</Link>,
	},
	{
		key: "2",
		label: <Link to="/feedback">Feedback</Link>,
	},
];

export { items, DEFAULT_RECORD };
