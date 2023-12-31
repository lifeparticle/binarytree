import { ColumnsType } from "antd/es/table";

interface CookieTableDataType {
	cookie: string;
	description: string;
	type: string;
	time: string;
}

const TABLE_COLUMNS: ColumnsType<CookieTableDataType> = [
	{
		title: "Cookie",
		dataIndex: "cookie",
		key: "cookie",
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Type",
		dataIndex: "type",
		key: "type",
	},
	{
		title: "Storage time",
		dataIndex: "time",
		key: "time",
	},
];

const TABLE_DATA = [
	{
		id: "1",
		cookie: "_gat",
		description: `This cookie is set by Google
		Analytics and is used to
		reduce the speed of requests.`,
		type: "Functionality",
		time: "1 minute",
	},
	{
		id: "2",
		cookie: "_ga",
		description: `This cookie is set by Google
		Analytics. The cookie is used
		to calculate visitor, session,
		campaign data and track site
		usage in the Site Analysis
		report. Cookies store
		information anonymously and
		assign a randomly generated
		number to identify unique
		visitors.`,
		type: "Analytics",
		time: "2 years",
	},
	{
		id: "3",
		cookie: "_gid",
		description: `This cookie is set by Google
		Analytics. A cookie is used to
		store information about how
		visitors use the site and helps
		to create an analytical report
		on how the site works. The
		data collected, including the
		number of visitors, the source
		from which they came, and
		the pages are received
		anonymously.`,
		type: "Analytics",
		time: "24 hours",
	},
];

export { TABLE_COLUMNS, TABLE_DATA };
