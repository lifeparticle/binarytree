import { FORMAT_LABELS } from "./constants";

export type FormatType = Lowercase<(typeof FORMAT_LABELS)[number]>;

export type colors = {
	[key: string]: string;
};
