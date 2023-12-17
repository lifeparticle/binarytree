const FILL_SPACE = `        `;
const FILL_HYPHEN = `------`;

export const generateRow = (
	colNum: number,
	fill = FILL_SPACE,
	append = false
) => {
	let result = append ? `` : `|`;

	for (let i = 0; i < colNum; i++) {
		result += `${fill}|`;
	}
	return result;
};

export const generateHeader = (colNum: number) => {
	const tableHeader = generateRow(colNum);
	const tableHeaderDivider = generateRow(colNum, FILL_HYPHEN);
	return `${tableHeader}\n${tableHeaderDivider}`;
};

const getPartialString = (line: string, updatedColNum: number): string => {
	let result = "";
	let currChar = ``;
	let tempUpdatedColNum = updatedColNum;

	for (let i = 0; i < line.length; i++) {
		currChar = line.charAt(i);
		if (tempUpdatedColNum < 0) {
			break;
		} else if (currChar === "|" && tempUpdatedColNum > 0) {
			result += line.charAt(i);
			tempUpdatedColNum--;
		} else if (tempUpdatedColNum > 0) {
			result += line.charAt(i);
		}
	}

	return result;
};

const getUpdatedColNum = (prevColNum: number, colNum: number): number =>
	prevColNum - (prevColNum - colNum) + 1;

export const updateHeader = (prevTable: string, colNum: number) => {
	const lines = prevTable
		.split(/\r?\n/)
		.filter((line: string) => line !== "");
	const prevColNum = lines[0].replace(/[^|]/g, "").length - 1;

	if (prevColNum === colNum) {
		return `${lines[0]}\n${lines[1]}`;
	}

	const isColNumInc = prevColNum < colNum;

	const tableHeader = isColNumInc
		? `${lines[0]}${generateRow(colNum - prevColNum, FILL_SPACE, true)}`
		: getPartialString(lines[0], getUpdatedColNum(prevColNum, colNum));

	const tableHeaderDivider = isColNumInc
		? generateRow(colNum, FILL_HYPHEN)
		: getPartialString(lines[1], getUpdatedColNum(prevColNum, colNum));

	return `${tableHeader}\n${tableHeaderDivider}`;
};

export const generateRows = (rowNum: number, colNum: number) => {
	let result = ``;
	const row = generateRow(colNum);
	for (let j = 0; j < rowNum; j++) {
		result += `${row}\n`;
	}
	return result;
};

export const updateRows = (
	prevTable: string,
	rowNum: number,
	colNum: number
) => {
	const lines = prevTable
		.split(/\r?\n/)
		.filter((line: string) => line !== "");
	const prevRowNum = lines.length - 2;
	const prevColNum = lines[0].replace(/[^|]/g, "").length - 1;

	let result = ``;

	if (rowNum === 0) return "";

	if (prevRowNum === rowNum) {
		if (prevColNum < colNum) {
			for (let i = 2; i < lines.length; i++) {
				result += `${lines[i]}${generateRow(
					colNum - prevColNum,
					FILL_SPACE,
					true
				)}\n`;
			}
		} else {
			let updatedRow;
			let tempUpdatedColNum;

			for (let i = 2; i < lines.length; i++) {
				updatedRow = ``;
				tempUpdatedColNum = getUpdatedColNum(prevColNum, colNum);

				updatedRow = getPartialString(lines[i], tempUpdatedColNum);

				result += `${updatedRow}\n`;
			}
		}
		return result;
	}

	const rows = lines.length === 2 ? `` : lines.slice(2).join("\n");
	const appendRows = generateRows(rowNum - prevRowNum, colNum);

	result =
		prevRowNum < rowNum
			? `${rows}\n${appendRows}`
			: `${lines
					.slice(2, lines.length - (prevRowNum - rowNum))
					.join("\n")}`;

	return result;
};

export const updateTable = (
	rowNum: number,
	colNum: number,
	prevTable: string
) => {
	return `${updateHeader(prevTable, colNum)}\n${updateRows(
		prevTable,
		rowNum,
		colNum
	)}`;
};

export const createTable = (rowNum: number, colNum: number) => {
	return `${generateHeader(colNum)}\n${generateRows(rowNum, colNum)}`;
};

export const generateTable = (
	rowNum: number,
	colNum: number,
	prevTable: string
) => {
	return prevTable
		? updateTable(rowNum, colNum, prevTable)
		: createTable(rowNum, colNum);
};
