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

export const generateRow = (col: number, fill = `   `) => {
	let result = ``;

	for (let i = 0; i < col; i++) {
		result += `|${fill}`;
	}
	result += `|`;
	return result;
};

export const generateHeader = (col: number) => {
	let tableHeader = generateRow(col);
	let tableHeaderDivider = generateRow(col, `---`);
	return `${tableHeader}\n${tableHeaderDivider}`;
};

export const updateHeader = (prevHeader: string, col: number) => {
	return "";
};

export const generateRows = (row: number, col: number) => {
	let result = ``;
	for (let j = 0; j < row; j++) {
		result += `${generateRow(col)}\n`;
	}

	return result;
};

export const updateRows = (prevRows: string[], row: number, col: number) => {
	return "";
};

export const generateTable = (row: number, col: number, prevTable: string) => {
	return `${generateHeader(col)}\n${generateRows(row, col)}`;
};

export const updateTable = (row: number, col: number, prevTable: string) => {
	// generateHeader ? updateHeader
	// generateRows ? updateRows ?
	return "";
};
