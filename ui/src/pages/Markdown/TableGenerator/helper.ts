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

export const updateHeader = (prevTable: string, colNum: number) => {
	const lines = prevTable
		.split(/\r?\n/)
		.filter((line: string) => line !== "");
	const prevColNum = lines[0].replace(/[^|]/g, "").length - 1;

	if (prevColNum === colNum) {
		return `${lines[0]}\n${lines[1]}`;
	}

	const isColNumInc = prevColNum < colNum;
	let tableHeader = ``;
	let tableHeaderDivider = ``;

	if (isColNumInc) {
		tableHeader = `${lines[0]}${generateRow(
			colNum - prevColNum,
			FILL_SPACE,
			true
		)}`;
		tableHeaderDivider = generateRow(colNum, FILL_HYPHEN);
	} else {
		const updatedColNum = prevColNum - (prevColNum - colNum) + 1;
		let currChar = ``;

		let tempUpdatedColNum = updatedColNum;

		for (let i = 0; i < lines[0].length; i++) {
			currChar = lines[0].charAt(i);
			if (tempUpdatedColNum < 0) {
				break;
			} else if (currChar === "|" && tempUpdatedColNum > 0) {
				tableHeader += lines[0].charAt(i);
				tempUpdatedColNum--;
			} else if (tempUpdatedColNum > 0) {
				tableHeader += lines[0].charAt(i);
			}
		}

		tempUpdatedColNum = updatedColNum;

		for (let i = 0; i < lines[1].length; i++) {
			currChar = lines[1].charAt(i);
			if (tempUpdatedColNum < 0) {
				break;
			} else if (currChar === "|" && tempUpdatedColNum > 0) {
				tableHeaderDivider += lines[1].charAt(i);
				tempUpdatedColNum--;
			} else if (tempUpdatedColNum > 0) {
				tableHeaderDivider += lines[1].charAt(i);
			}
		}
	}

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
