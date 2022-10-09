let FILL = `   `;

export const generateTabletemp = (row: number, column: number, output: any) => {
	console.log(`${column}   ${row} output: ${output}`);
	if (column === undefined || row === undefined) return output as string;
	if (column === 0 && row === 0) return;

	let addHeader = false;
	let prevRow = 0;
	let prevCol = 0;
	let lines = [];
	let updateOutput = "";
	let normalColValue = "";
	console.log("=================================");

	if (output === "") {
		addHeader = true;
		console.log("1st time");
	} else {
		console.log(output);
		console.log(output.split(/\r?\n/));
		lines = output.split(/\r?\n/).filter((line: string) => line !== "");
		console.log(`lines ${lines}`);
		prevRow = lines.length - 2;
		// output.replace(/\s/g, "").length -1
		prevCol = lines[0].replace(/\s/g, "").length - 1;
		console.log(lines[0].replace(/\s/g, ""));
		console.log(`prevRow: ${prevRow}     prevCol: ${prevCol}`);
	}

	normalColValue = "|";
	for (let i = 0; i < column; i++) {
		normalColValue += "               |";
	}

	if (row > prevRow || column > prevCol) {
		console.log(`>>>>>> ${row} ${column}`);
		console.log(`${output}`);

		let newRow = row === prevRow ? 0 : row - prevRow;
		let newCol = column - prevCol === 0 ? column : column - prevCol;
		console.log(`+++++++++  ${newRow} ${newCol}`);

		// let colValue = "";
		let finalValue = "";
		for (let j = 0; j < newRow; j++) {
			finalValue += normalColValue + "\n";
		}
		if (addHeader) {
			let header = normalColValue.replaceAll(" ", "-");
			return `${normalColValue}\n${header}\n${finalValue}`;
		}

		if (column - prevCol > 0) {
			// updateOutput = "";
			let colValue;
			console.log(`lines lines lines ${lines}`);
			console.log(`lines.slice(2) ${lines.slice(2)}`);
			updateOutput = lines.slice(2).map((line: string) => {
				colValue = "";
				for (let i = 0; i < newCol; i++) {
					colValue += "               |";
				}
				// finalValue += colValue;
				console.log(`map ${line}`);
				console.log(`${line}${colValue}\n`);
				return (updateOutput += `${line}${colValue}\n`);
			});
			console.log(`lines.slice(0, 2) ${lines.slice(2)}`);
			console.log(
				`lines.slice(0, 2).join("\n") ${lines.slice(0, 2).join("\n")}`
			);

			// console.log(`colValue ${colValue}`);
			let header = normalColValue.replaceAll(" ", "-");

			updateOutput = `${normalColValue}\n${header}\n${updateOutput}`;
		}

		console.log(`updateOutput ${updateOutput}`);

		output = updateOutput === "" ? output : `${updateOutput}`;

		console.log(`finalValue ${finalValue}`);
		return `${output}${finalValue}`;
	} else {
		return "";
	}
};

export const generateRow = (colNum: number, fill = FILL) => {
	let result = ``;

	for (let i = 0; i < colNum; i++) {
		result += `|${fill}`;
	}
	result += `|`;
	return result;
};

export const generateHeader = (colNum: number) => {
	let tableHeader = generateRow(colNum);
	let tableHeaderDivider = generateRow(colNum, `---`);
	return `${tableHeader}\n${tableHeaderDivider}`;
};

export const updateHeader = (prevHeader: string, colNum: number) => {
	let lines = prevHeader.split(/\r?\n/).filter((line: string) => line !== "");
	let prevColNum = lines[0].replace(/\s/g, "").length - 1;

	if (prevColNum === colNum) return;

	let isColNumInc = prevColNum < colNum ? true : false;
	let tableHeader = ``;
	let tableHeaderDivider = ``;

	if (isColNumInc) {
		tableHeader = generateRow(colNum - prevColNum);
		tableHeaderDivider = generateRow(colNum, `---`);
	} else {
		let updatedColNum = prevColNum - (prevColNum - colNum);
		let currChar = ``;

		let tempUpdatedColNum = updatedColNum;

		for (let i = 0; i < lines[1].length; i++) {
			currChar = lines[1].charAt(i);
			if (tempUpdatedColNum < 0) {
				break;
			} else if (currChar === "|" && tempUpdatedColNum < 0) {
				tableHeaderDivider += lines[1].charAt(i);
				tempUpdatedColNum--;
			} else {
				tableHeaderDivider += lines[1].charAt(i);
			}
		}

		tempUpdatedColNum = updatedColNum;

		for (let i = 0; i < lines[0].length; i++) {
			currChar = lines[0].charAt(i);
			if (updatedColNum < 0) {
				break;
			} else if (currChar === "|" && updatedColNum < 0) {
				tableHeader += lines[0].charAt(i);
				updatedColNum--;
			} else {
				tableHeader += lines[0].charAt(i);
			}
		}
	}

	console.log(
		`tableHeader: ${tableHeader} tableHeaderDivider: ${tableHeaderDivider}`
	);

	return `${tableHeader}\n${tableHeaderDivider}`;
};

export const generateRows = (rowNum: number, colNum: number) => {
	let result = ``;
	let row = generateRow(colNum);
	for (let j = 0; j < rowNum; j++) {
		result += `${row}\n`;
	}
	return result;
};

export const updateRows = (
	prevRows: string,
	rowNum: number,
	colNum: number
) => {
	let lines = prevRows.split(/\r?\n/).filter((line: string) => line !== "");
	let prevRowNum = lines.length - 2;
	let appendRows = ``;
	let result = ``;

	if (prevRowNum === rowNum) return;

	let isRowNumInc = prevRowNum < rowNum ? true : false;

	if (isRowNumInc) {
		appendRows = generateRows(rowNum - prevRowNum, colNum);
		result = `${lines.slice(2, lines.length).join("\n")}\n${appendRows}`;
	} else {
		result = `${lines
			.slice(2, lines.length - prevRowNum - rowNum)
			.join("\n")}`;
	}

	console.log(result);
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

export const createTable = (
	rowNum: number,
	colNum: number,
	prevTable: string
) => {
	return `${generateHeader(colNum)}\n${generateRows(rowNum, colNum)}`;
};

export const generateTable = (
	rowNum: number,
	colNum: number,
	prevTable: string
) => {
	return prevTable
		? updateTable(rowNum, colNum, prevTable)
		: createTable(rowNum, colNum, prevTable);
};
