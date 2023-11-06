// Define a union type of possible data types that can be detected.
export type DataType =
	| "number"
	| "string"
	| "array"
	| "boolean"
	| "null"
	| "object"
	| "url"
	| "No data"
	| "Can't detect data";

export class DataDetection {
	// input data as a string or null if not provided.
	data: string | null = null;

	// Array of DataTypes that this instance will attempt to detect.
	typesToDetect: DataType[];

	// Flag to determine if multiple data types should be considered.
	isMultiple: boolean = false;

	// Regular expression used to split input data into individual parts.
	// It is set to match commas, spaces, and newlines by default.
	// isMultiple must be set to true for this to be used.
	delimitersRegex: RegExp = /[,\s\n]+/;

	// Constructor takes an array of data types that should be detected.
	constructor(typesToDetect: DataType[]) {
		this.typesToDetect = typesToDetect;
	}

	setData(
		data: string,
		isMultiple = false,
		delimitersRegex = /[,\s\n]+/
	): void {
		this.data = data;
		this.isMultiple = isMultiple;
		this.delimitersRegex = delimitersRegex;
	}

	private isUrl(data: string): boolean {
		const urlRegex =
			/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
		return urlRegex.test(data);
	}

	private isArray(data: string): boolean {
		try {
			return Array.isArray(JSON.parse(data));
		} catch {
			return false;
		}
	}

	parseData = (data: string): string[] => {
		return data
			.split(this.delimitersRegex)
			.filter((entry) => entry.length > 0);
	};

	detect(): DataType {
		if (!this.data) {
			return "No data";
		}

		if (this.isMultiple) {
			if (
				this.typesToDetect.includes("array") &&
				this.isArray(this.data)
			) {
				return "array";
			} else {
				const parsedData = this.parseData(this.data);

				// Detect types for each individual element.
				const detectedTypes = parsedData.map((item) =>
					this.detectType(item)
				);

				// Check if all detected types are the same.
				const allSameType = detectedTypes.every(
					(type) => type === detectedTypes[0]
				);

				if (
					allSameType &&
					this.typesToDetect.includes(detectedTypes[0])
				) {
					return detectedTypes[0];
				} else {
					return "string";
				}
			}
		} else {
			// Detect type for single data element.
			return this.detectType(this.data);
		}
	}

	private detectType(data: string): DataType {
		if (this.typesToDetect.includes("url") && this.isUrl(data)) {
			return "url";
		}

		try {
			const parsedData = JSON.parse(data);
			const actualType: DataType = this.isArray(parsedData)
				? "array"
				: parsedData === null
				? "null"
				: (typeof parsedData as DataType);

			if (this.typesToDetect.includes(actualType)) {
				return actualType;
			}
		} catch (error) {
			if (this.typesToDetect.includes("string")) {
				return "string";
			}
		}

		// Special case for empty array '[]' or empty object '{}' represented as strings.
		if (data === "[]" || data === "{}") {
			return "string";
		}

		return "Can't detect data";
	}
}
