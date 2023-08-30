import { markdownType } from "./types";

function parsedMarkdown(markdown: string) {
	const entries = markdown.split("\n### ");

	const parsedEntries = entries
		.filter((dt) => dt.length > 0)
		.map((entry) => {
			const [versionLine, ...changes] = entry.split("\n");
			const output = versionLine.match(/\[(.*?)\] - (\d{4}-\d{2}-\d{2})/);

			const features = changes
				.map((change) => {
					const f = change.match(/- (.+)/);
					return f?.[1]?.trim();
				})
				.filter(Boolean);

			return {
				version: output?.[1],
				date: output?.[2],
				features,
			} as markdownType;
		});

	return parsedEntries;
}

export { parsedMarkdown };
