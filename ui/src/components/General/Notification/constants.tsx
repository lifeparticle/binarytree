const NOTIFICATION_KEY = "notification";
const NOTIFICATION_URL = "/CHANGELOG.md";
const NOTIFICATION_RED_FLAG_KEY = "feature-date";

const DEFAULT_RECORD = [
	{
		version: "8.0.0",
		date: "2023-11-07",
		features: ["Refactor DataDetection class", "Organise component files"],
	},
	{
		version: "7.1.2",
		date: "2023-11-06",
		features: [
			"Refactor DataDetection class to handle multiple data",
			"Refactor QR code",
		],
	},
	{
		version: "7.1.1",
		date: "2023-11-05",
		features: [
			"Organise components exports and imports",
			"Rename `tests` to `__tests__`",
		],
	},
];

export {
	DEFAULT_RECORD,
	NOTIFICATION_KEY,
	NOTIFICATION_URL,
	NOTIFICATION_RED_FLAG_KEY,
};
