import {
	generateRow,
	FILL_SPACE,
	FILL_HYPHEN,
} from "pages/Markdown/TableGenerator/helper";

describe("generateRow", () => {
	test("generates a row with specified column number", () => {
		const colNum = 3;
		const expectedRow = `|        |        |        |`;
		expect(generateRow(colNum)).toBe(expectedRow);
	});

	test("generates a row with custom fill", () => {
		const colNum = 2;
		const expectedRow = `|------|------|`;
		expect(generateRow(colNum, FILL_HYPHEN)).toBe(expectedRow);
	});

	test("appends to existing row", () => {
		const colNum = 1;
		const append = true;
		const expectedRow = `        |`;
		expect(generateRow(colNum, FILL_SPACE, append)).toBe(expectedRow);
	});
});
