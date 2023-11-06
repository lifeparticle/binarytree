const sortNumbers = (a: number, b: number, order: string) =>
	order === "Ascending" ? a - b : b - a;

const sortStrings = (a: string, b: string, order: string) =>
	order === "Ascending" ? a.localeCompare(b) : b.localeCompare(a);

const sortData = (data: string[], order: string, dataType: string) => {
	switch (dataType) {
		case "number": {
			const numberArray = data.map(Number);
			return numberArray.sort((a, b) => sortNumbers(a, b, order));
		}
		case "array": {
			return ["Not implemented"];
		}
		case "string": {
			return data.sort((a, b) => sortStrings(a, b, order));
		}
		default: {
			return [""];
		}
	}
};

export { sortData };
