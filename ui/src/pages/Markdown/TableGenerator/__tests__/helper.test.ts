import {
	generateRow,
	FILL_SPACE,
	FILL_HYPHEN,
	generateTable,
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

	test("generates a row with custom fill and no append", () => {
		const colNum = 2;
		const append = false;
		const expectedRow = `|xxxx|xxxx|`;
		expect(generateRow(colNum, "xxxx", append)).toBe(expectedRow);
	});

	test("appends custom fill to an existing row", () => {
		const colNum = 2;
		const append = true;
		const expectedRow = `xxxx|xxxx|`;
		expect(generateRow(colNum, "xxxx", append)).toBe(expectedRow);
	});
	test("handles large column numbers correctly", () => {
		const colNum = 100;
		let expectedRow = `|`;
		for (let i = 0; i < colNum; i++) {
			expectedRow += `${FILL_SPACE}|`;
		}
		expect(generateRow(colNum)).toBe(expectedRow);
	});

	test("creates a new table with specified row and column numbers", () => {
		const rowNum = 0;
		const colNum = 1;
		const expectedTable = `|        |\n|------|\n`;
		expect(generateTable(rowNum, colNum, "")).toBe(expectedTable);
	});

	test("updates an existing table with more rows", () => {
		const rowNum = 1;
		const colNum = 1;
		const existingTable = `|        |\n|------|\n`;
		const expectedTable = `|        |\n|------|\n|        |\n`;
		expect(generateTable(rowNum, colNum, existingTable)).toBe(
			expectedTable
		);
	});

	test("updates an existing table with more column", () => {
		const rowNum = 2;
		const colNum = 2;
		const existingTable = `|        |\n|------|\n|        |\n`;
		const expectedTable = `|        |        |\n|------|------|\n|        |\n|        |        |\n`;
		expect(generateTable(rowNum, colNum, existingTable)).toBe(
			expectedTable
		);
	});

	test("updates an existing table with less rows", () => {
		const rowNum = 0;
		const colNum = 1;
		const existingTable = `|        |\n|------|\n|        |\n`;
		const expectedTable = `|        |\n|------|\n`;
		expect(generateTable(rowNum, colNum, existingTable)).toBe(
			expectedTable
		);
	});

	test("updates an existing table with more rows and columns", () => {
		const rowNum = 10;
		const colNum = 10;
		const existingTable = `|        |\n|------|\n|        |\n`;
		const expectedTable = `|        |        |        |        |        |        |        |        |        |        |\n|------|------|------|------|------|------|------|------|------|------|\n|        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n|        |        |        |        |        |        |        |        |        |        |\n`;
		expect(generateTable(rowNum, colNum, existingTable)).toBe(
			expectedTable
		);
	});
});
