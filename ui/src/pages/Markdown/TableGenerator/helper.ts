export const FILL_SPACE = `        `;
export const FILL_HYPHEN = `------`;

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

const addHeader = (prevHeader: string, prevColNum: number, colNum: number) => {
	let tableHeader = "";
	let tableHeaderDivider = "";

	tableHeader = `${prevHeader}${generateRow(
		colNum - prevColNum,
		FILL_SPACE,
		true
	)}`;
	tableHeaderDivider = generateRow(colNum, FILL_HYPHEN);

	return `${tableHeader}\n${tableHeaderDivider}`;
};

const removeHeader = (
	prevHeader: string,
	prevDivider: string,
	prevColNum: number,
	colNum: number
) => {
	let tableHeader = "";
	let tableHeaderDivider = "";

	const updatedColNum = prevColNum - (prevColNum - colNum) + 1;
	let currChar = "";

	let tempUpdatedColNum = updatedColNum;

	for (let i = 0; i < prevHeader.length; i++) {
		currChar = prevHeader.charAt(i);
		if (tempUpdatedColNum < 0) {
			break;
		} else if (currChar === "|" && tempUpdatedColNum > 0) {
			tableHeader += prevHeader.charAt(i);
			tempUpdatedColNum--;
		} else if (tempUpdatedColNum > 0) {
			tableHeader += prevHeader.charAt(i);
		}
	}

	tempUpdatedColNum = updatedColNum;

	for (let i = 0; i < prevDivider.length; i++) {
		currChar = prevDivider.charAt(i);
		if (tempUpdatedColNum < 0) {
			break;
		} else if (currChar === "|" && tempUpdatedColNum > 0) {
			tableHeaderDivider += prevDivider.charAt(i);
			tempUpdatedColNum--;
		} else if (tempUpdatedColNum > 0) {
			tableHeaderDivider += prevDivider.charAt(i);
		}
	}

	return `${tableHeader}\n${tableHeaderDivider}`;
};

const getPrevColNum = (header: string) => {
	return header.replace(/[^|]/g, "").length - 1;
};

const getLines = (table: string) => {
	return table.split(/\r?\n/).filter((line: string) => line !== "");
};

export const updateHeader = (prevTable: string, colNum: number) => {
	const lines = getLines(prevTable);
	const prevHeader = lines[0];
	const prevDivider = lines[1];
	const prevColNum = getPrevColNum(prevHeader);

	if (prevColNum === colNum) {
		return `${prevHeader}\n${prevDivider}`;
	}

	const isColNumInc = prevColNum < colNum;

	if (isColNumInc) {
		return addHeader(prevHeader, prevColNum, colNum);
	}

	return removeHeader(prevHeader, prevDivider, prevColNum, colNum);
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
	const lines = getLines(prevTable);
	const prevRowNum = lines.length - 2;
	const prevColNum = getPrevColNum(lines[0]);
	let appendRows = ``;
	let result = ``;

	const isColNumInc = prevColNum < colNum;

	if (rowNum === 0) return "";

	if (prevRowNum === rowNum) {
		if (isColNumInc) {
			for (let i = 2; i < lines.length; i++) {
				result += `${lines[i]}${generateRow(
					colNum - prevColNum,
					FILL_SPACE,
					true
				)}\n`;
			}
		} else {
			const updatedColNum = prevColNum - (prevColNum - colNum) + 1;
			let currChar = ``;
			let updatedRow;
			let tempUpdatedColNum;

			for (let i = 2; i < lines.length; i++) {
				updatedRow = ``;
				tempUpdatedColNum = updatedColNum;
				for (let j = 0; j < lines[i].length; j++) {
					currChar = lines[i].charAt(j);
					if (tempUpdatedColNum < 0) {
						break;
					} else if (currChar === "|" && tempUpdatedColNum > 0) {
						updatedRow += lines[i].charAt(j);
						tempUpdatedColNum--;
					} else if (tempUpdatedColNum > 0) {
						updatedRow += lines[i].charAt(j);
					}
				}

				result += `${updatedRow}\n`;
			}
		}
		return result;
	}

	const isRowNumInc = prevRowNum < rowNum;

	if (isRowNumInc) {
		const rows =
			lines.length === 2
				? ``
				: `${lines.slice(2, lines.length).join("\n")}\n`;

		appendRows = generateRows(rowNum - prevRowNum, colNum);
		result = `${rows}${appendRows}`;
	} else {
		result = `${lines
			.slice(2, lines.length - (prevRowNum - rowNum))
			.join("\n")}`;
	}

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
