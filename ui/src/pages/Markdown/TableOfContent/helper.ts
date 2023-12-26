import { TocItem } from "./types";

const getUniqueHeadingText = (text: string) => {
	const headingCounts: Record<string, number> = {};

	if (headingCounts[text] >= 0) {
		headingCounts[text]++;
		return `${text}-${headingCounts[text]}`;
	} else {
		headingCounts[text] = 0;
		return text;
	}
};

const generateTocItem = (text: string) => {
	return `[${text}](#${getUniqueHeadingText(text)
		.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^A-Za-z0-9-\u0080-\uFFFF_]+/g, "")})`;
};

const indentMap = {
	H1: "- ",
	H2: "\t* ",
	H3: "\t\t+ ",
	H4: "\t\t\t- ",
	H5: "\t\t\t\t* ",
	H6: "\t\t\t\t\t+ ",
};

export const generateTableOfContentsText = (tableOfContents: TocItem[]) => {
	return tableOfContents
		.map((tocItem) => {
			return `${indentMap[tocItem.tag]}${generateTocItem(tocItem.text)}`;
		})
		.join("\n");
};
