export type JustifyContent =
	| "flex-start"
	| "flex-end"
	| "center"
	| "space-between"
	| "space-around"
	| "space-evenly";

type JustifyContentOption = {
	label: JustifyContent;
	value: JustifyContent;
};

export const JUSTIFY_CONTENT: JustifyContentOption[] = [
	{ label: "flex-start", value: "flex-start" },
	{ label: "flex-end", value: "flex-end" },
	{ label: "center", value: "center" },
	{ label: "space-evenly", value: "space-evenly" },
	{ label: "space-around", value: "space-around" },
	{ label: "space-between", value: "space-between" },
];

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

type FlexDirectionOption = {
	label: FlexDirection;
	value: FlexDirection;
};

export const FLEX_DIRECTION: FlexDirectionOption[] = [
	{ label: "row", value: "row" },
	{ label: "column", value: "column" },
	{ label: "row-reverse", value: "row-reverse" },
	{ label: "column-reverse", value: "column-reverse" },
];

export type AlignItems =
	| "stretch"
	| "flex-start"
	| "flex-end"
	| "center"
	| "baseline";
type AlignItemsOption = {
	label: AlignItems;
	value: AlignItems;
};

export const ALIGN_ITEM: AlignItemsOption[] = [
	{ label: "flex-start", value: "flex-start" },
	{ label: "flex-end", value: "flex-end" },
	{ label: "center", value: "center" },
	{ label: "stretch", value: "stretch" },
	{ label: "baseline", value: "baseline" },
];

export type AlignContent =
	| "flex-start"
	| "flex-end"
	| "center"
	| "space-between"
	| "space-around"
	| "stretch"
	| "baseline";

type AlignContentOption = {
	label: AlignContent;
	value: AlignContent;
};

export const ALIGN_CONTENT: AlignContentOption[] = [
	{ label: "flex-start", value: "flex-start" },
	{ label: "flex-end", value: "flex-end" },
	{ label: "center", value: "center" },
	{ label: "stretch", value: "stretch" },
	{ label: "baseline", value: "baseline" },
];

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexWrapOption = {
	label: FlexWrap;
	value: FlexWrap;
};

export const FLEX_WRAP: FlexWrapOption[] = [
	{ label: "nowrap", value: "nowrap" },
	{ label: "wrap", value: "wrap" },
	{ label: "wrap-reverse", value: "wrap-reverse" },
];

export type AlignSelf =
	| "auto"
	| "flex-start"
	| "flex-end"
	| "center"
	| "space-between"
	| "space-around"
	| "stretch"
	| "baseline";

type AlignSelfOption = {
	label: AlignSelf;
	value: AlignSelf;
};

export const ALIGN_SELF: AlignSelfOption[] = [
	{ label: "auto", value: "auto" },
	{ label: "flex-start", value: "flex-start" },
	{ label: "flex-end", value: "flex-end" },
	{ label: "center", value: "center" },
	{ label: "stretch", value: "stretch" },
	{ label: "baseline", value: "baseline" },
];
export type ItemStyle = {
	index: number;
	height: string;
	background: string;
	color: string;
	margin: string;
	padding: string;
	borderRadius: string;
	order: number;
	flexGrow: number;
	flexShrink: number;
	flexBasis: string;
	alignSelf: string;
};

export const ItemStyleIntialvalue: ItemStyle = {
	index: 0,
	height: "auto",
	background: "whitesmoke",
	color: "black",
	margin: "10px",
	padding: "10px",
	borderRadius: ".5rem",
	order: 0,
	flexGrow: 0,
	flexShrink: 0,
	flexBasis: "auto",
	alignSelf: "auto",
};

export type ContainerStyle = {
	width: string;
	height: string;
	overflow: string;
	backgroundColor: string;
	borderRadius: string;
	display: string;
	justifyContent: JustifyContent;
	flexDirection: FlexDirection;
	alignItems: AlignItems;
	alignContent: AlignContent;
	flexWrap: FlexWrap;
};

export const bgColor = "#ffffff0";
export const boxColor = "#4f5456";
