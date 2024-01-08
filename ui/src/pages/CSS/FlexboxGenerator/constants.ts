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
