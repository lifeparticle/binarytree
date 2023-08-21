import { FORMAT_LABELS } from "./constant";

type FormatType = Lowercase<(typeof FORMAT_LABELS)[number]>;

export type { FormatType };
