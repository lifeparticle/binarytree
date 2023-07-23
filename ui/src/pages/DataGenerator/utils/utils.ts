export const convertToJSON = (
	colNames: string[],
	rowNum: number,
	result: string
) => {
	return JSON.stringify({ colNames, rowNum, result });
};
