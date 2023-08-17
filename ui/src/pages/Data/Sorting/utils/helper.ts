function areAllCharsNumbers(inputString: string): boolean {
	return /^\d+(\.\d+)?$/.test(inputString);
}

export const sortData = (data: string, order: string) => {
	const delimitersRegex = /[,\s\n]+/;

	const formattedStringArray = data
		.split(delimitersRegex)
		.filter((entry) => entry.length > 0);
	const isNumberArray = formattedStringArray.every((value) =>
		areAllCharsNumbers(value)
	);

	if (isNumberArray) {
		const numberArray = formattedStringArray.map((value) => Number(value));

		return numberArray.sort((a, b) =>
			order === "Ascending" ? a - b : b - a
		);
	}

	return formattedStringArray.sort(
		order === "Ascending"
			? (a, b) => a.localeCompare(b)
			: (a, b) => b.localeCompare(a)
	);
};
