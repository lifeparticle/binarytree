import { TabsProps } from "antd";

export const BASE_URL = import.meta.env.VITE_VERCEL_NEWS_FEED_URL;

export const QUERY_KEY_NEWS = "news";

const SITE_OPTIONS = {
	"frontend-focus": {
		label: "Frontend Focus",
		value: "frontend-focus",
		show: true,
	},
	"react-status": {
		label: "React Status",
		value: "react-status",
		show: true,
	},
	"news-api": {
		label: "News",
		value: "news-api",
		show: true,
	},
};

export const FIRST_TAB_VALUE = SITE_OPTIONS["frontend-focus"].value;

export const TAB_ITEMS: TabsProps["items"] = Object.values(SITE_OPTIONS)
	.filter((option) => option.show)
	.map((option) => ({
		key: option.value,
		label: option.label,
	}));
