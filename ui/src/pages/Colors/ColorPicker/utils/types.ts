import { FORMAT_LABELS } from "./constants";

type FormatType = Lowercase<(typeof FORMAT_LABELS)[number]>;

export type { FormatType };
