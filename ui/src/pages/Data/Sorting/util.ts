function areAllCharsNumbers(inputString: string): boolean {
	return /^\d+(\.\d+)?$/.test(inputString);
}

export const sortData = (data: string[], order: string) => {
	const isNumberArray = data.every((value) => areAllCharsNumbers(value));

	if (isNumberArray) {
		const numberArray = data.map((value) => Number(value));
		return numberArray.sort((a, b) =>
			order === "Ascending" ? a - b : b - a
		);
	}

	return data.sort(
		order === "Ascending"
			? (a, b) => a.localeCompare(b)
			: (a, b) => b.localeCompare(a)
	);
};
