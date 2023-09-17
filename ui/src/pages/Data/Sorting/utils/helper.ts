const isNumberArray = (data: string[]): boolean => {
	return data.every((value) => /^\d+(\.\d+)?$/.test(value));
};

const isArray = (data: string): boolean => {
	return data[0] === "[" && data[data.length - 1] === "]";
};

const sortNumbers = (a: number, b: number, order: string) =>
	order === "Ascending" ? a - b : b - a;

const sortStrings = (a: string, b: string, order: string) =>
	order === "Ascending" ? a.localeCompare(b) : b.localeCompare(a);

const formatData = (data: string): string[] => {
	const delimitersRegex = /[,\s\n]+/;
	return data.split(delimitersRegex).filter((entry) => entry.length > 0);
};

const detectData = (rawData: string, formattedData?: string[]): string => {
	const formattedStringArray = formattedData ?? formatData(rawData);

	if (formattedStringArray.length === 0) {
		return "No data";
	}

	if (isArray(rawData)) {
		return "Array";
	}

	return isNumberArray(formattedStringArray) ? "Number" : "String";
};

// todo: json obejcts, json array, js array
const sortData = (data: string, order: string) => {
	const formattedStringArray = formatData(data);
	const dataType = detectData(data, formattedStringArray);

	switch (dataType) {
		case "Number": {
			const numberArray = formattedStringArray.map(Number);
			return numberArray.sort((a, b) => sortNumbers(a, b, order));
		}
		case "Array": {
			return ["Not implemented"];
		}
		case "String": {
			return formattedStringArray.sort((a, b) =>
				sortStrings(a, b, order)
			);
		}
		default: {
			return ["No data"];
		}
	}
};

export { sortData, detectData };
