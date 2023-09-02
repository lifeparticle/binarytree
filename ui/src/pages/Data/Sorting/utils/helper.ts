function isNumberArray(data: string[]): boolean {
	return data.every((value) => /^\d+(\.\d+)?$/.test(value));
}

const sortNumbers = (a: number, b: number, order: string) =>
	order === "Ascending" ? a - b : b - a;
const sortStrings = (a: string, b: string, order: string) =>
	order === "Ascending" ? a.localeCompare(b) : b.localeCompare(a);

const formatData = (data: string): string[] => {
	const delimitersRegex = /[,\s\n]+/;
	return data.split(delimitersRegex).filter((entry) => entry.length > 0);
};

const detectData = (data: string): string => {
	return isNumberArray(formatData(data)) ? "Number" : "String";
};

const sortData = (data: string, order: string) => {
	const formattedStringArray = formatData(data);

	if (isNumberArray(formattedStringArray)) {
		const numberArray = formattedStringArray.map(Number);
		return numberArray.sort((a, b) => sortNumbers(a, b, order));
	}

	return formattedStringArray.sort((a, b) => sortStrings(a, b, order));
};

export { sortData, detectData };
