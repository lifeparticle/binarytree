import { TabsProps } from "antd";

const SITE_OPTIONS = {
	"frontend-focus": {
		label: "Frontend Focus",
		value: "https://cprss.s3.amazonaws.com/frontendfoc.us.xml",
	},
	"status-code": {
		label: "Status Code",
		value: "https://cprss.s3.amazonaws.com/react.statuscode.com.xml",
	},
	news: {
		label: "News",
		value: "https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/news.json",
	},
};

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: SITE_OPTIONS["frontend-focus"].value,
		label: SITE_OPTIONS["frontend-focus"].label,
	},
	{
		key: SITE_OPTIONS["status-code"].value,
		label: SITE_OPTIONS["status-code"].label,
	},
	{
		key: SITE_OPTIONS["news"].value,
		label: SITE_OPTIONS["news"].label,
	},
];
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

export { SITE_OPTIONS, TAB_ITEMS, corsProxyUrl };
