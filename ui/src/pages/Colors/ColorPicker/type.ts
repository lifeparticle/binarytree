import { formatLabels } from "./constant";

type FormatType = Lowercase<(typeof formatLabels)[number]>;

export type { FormatType };
