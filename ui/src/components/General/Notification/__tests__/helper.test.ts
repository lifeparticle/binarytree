import { parsedMarkdown } from "../helper";

describe("parsedMarkdown", () => {
	it("should correctly parse the markdown string", () => {
		const markdown = `
### [8.0.0] - 2023-11-07




- Refactor DataDetection class
- Organise component files



### [7.1.2] - 2023-11-06
- Refactor DataDetection class to handle multiple data
- Refactor QR code
### [7.1.1] - 2023-11-05

- Organise components exports and imports
- Rename \`tests\` to \`__tests__\`



`;

		const expectedOutput = [
			{
				version: "8.0.0",
				date: "2023-11-07",
				features: [
					"Refactor DataDetection class",
					"Organise component files",
				],
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

		expect(parsedMarkdown(markdown)).toEqual(expectedOutput);
	});
});
