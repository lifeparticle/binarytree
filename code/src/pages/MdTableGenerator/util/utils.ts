export const generateTable = (
	rowCount: number,
	column: number,
	addHeader: boolean
) => {
	let colValue = "";
	let finalValue = "";
	for (let j = 0; j < rowCount; j++) {
		colValue = "|";
		for (let i = 0; i < column; i++) {
			colValue += "               |";
		}
		finalValue += colValue + "\n";
	}
	if (addHeader) {
		let header = colValue.replaceAll(" ", "-");
		return `${colValue}\n${header}\n${finalValue}`;
	}

	return finalValue;
};
