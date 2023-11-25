import { faker } from "@faker-js/faker";

const borderStyleValues = [
	"none",
	"hidden",
	"dotted",
	"dashed",
	"solid",
	"double",
	"groove",
	"ridge",
	"inset",
	"outset",
];

const BORDER_STYLES = borderStyleValues.map((value) => ({
	value,
	label: value,
}));

const BORDER_RADIUS = {
	rounded: "rounded",
	circle: "circle",
	blob: "blob",
};

const SEGMENTED_OPTIONS = [
	{ label: "Rounded", value: "rounded" },
	{ label: "Circular", value: "circle" },
	{ label: "Blob", value: "blob" },
];

const PARAGRAPHS = faker.lorem.lines(5);
const RADIUS_ROUND = "1e5";
const INIT_BORDER = "5 5 5 5";
const INIT_BORDER_WIDTH = "5";
const INIT_COLOR = "rgba(158, 158, 158, 1)";
const BLOB_SHAPE = "30% 70% 70% 30% / 53% 30% 70% 47%";

export {
	BORDER_STYLES,
	SEGMENTED_OPTIONS,
	BORDER_RADIUS,
	PARAGRAPHS,
	RADIUS_ROUND,
	INIT_BORDER,
	INIT_BORDER_WIDTH,
	INIT_COLOR,
	BLOB_SHAPE,
};
