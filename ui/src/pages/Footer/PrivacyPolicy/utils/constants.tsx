import { ColumnsType } from "antd/es/table";
import { ActivityTableDataType, PurposeTableDataType } from "./types";

const PURPOSE_COLUMNS: ColumnsType<PurposeTableDataType> = [
	{
		title: "Purpose",
		dataIndex: "purpose",
		key: "purpose",
	},
	{
		title: "Legal basis",
		dataIndex: "legal",
		key: "legal",
	},
];

const PURPOSE_DATA = [
	{
		id: "1",
		purpose: "Offering communication between BinaryTree and the visitor.",
		legal: `Legitimate interest of BinaryTree to offer visitors an efficient way to communicate with its teams.`,
	},
	{
		id: "2",
		purpose:
			"Responding to the User/visitor’s request for information related to the Services offered by BinaryTree or request for assistance",
		legal: `Legitimate interest of BinaryTree to offer its visitors a mean to contact support teams.
		Contract with User (i.e. specific Terms of Service).`,
	},
	{
		id: "3",
		purpose:
			"Manage the request(s) of the Users related to their data protection rights",
		legal: `Legal obligation of BinaryTree`,
	},
	{
		id: "4",
		purpose: "Enhance and improve the Services and Platform",
		legal: `Legitimate interests of BinaryTree to offer optimized Services.`,
	},
	{
		id: "5",
		purpose:
			"Justify and demonstrate BinaryTree’s compliance with legal obligations in case of legal request and/or legal proceedings",
		legal: `Legitimate interest of BinaryTree to be able to demonstrate its compliance.`,
	},
	{
		id: "6",
		purpose: "Allow access to Services as provided on the Platform",
		legal: `Contract (Terms of Service).`,
	},
];

const ACTIVITY_COLUMNS: ColumnsType<ActivityTableDataType> = [
	{
		title: "Activity",
		dataIndex: "activity",
		key: "activity",
	},
	{
		title: "Categories of Personal data",
		dataIndex: "categories",
		key: "categories",
		render: (categories: string[]) => (
			<ul style={{ listStyleType: "disc" }}>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
		),
	},
];

const ACTIVITY_DATA = [
	{
		id: "1",
		activity: "Visiting the Platform",
		categories: ["Browsing data."],
	},
	{
		id: "2",
		activity: "Contacting BinaryTree support teams",
		categories: [
			"Identification data.",
			"Contact data.",
			"Content of your request.",
		],
	},
	{
		id: "3",
		activity:
			"Allowing the visitors and Users to exercise their data protection rights",
		categories: [
			"Identification data.",
			"Contact data.",
			"Content of your request.",
			"Data necessary to reply to the request addressed to BinaryTree.",
		],
	},
	{
		id: "4",
		activity: "Complying with legal requests or manage litigation",
		categories: [
			"Data necessary to prove BinaryTree’s compliance to its obligations and/or manage legal proceedings.",
		],
	},
];

export { PURPOSE_COLUMNS, PURPOSE_DATA, ACTIVITY_DATA, ACTIVITY_COLUMNS };
