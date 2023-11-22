const CANT_DETECT_DATA = "Can't detect data";

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

	// Set of DataType that this instance will attempt to detect.
	typesToDetect: Set<DataType>;

	// Flag to determine if multiple data types should be considered.
	isMultiple: boolean = false;

	// Regular expression used to split input data into individual parts.
	// It is set to match commas, spaces, and newlines by default.
	// isMultiple must be set to true for this to be used.
	delimitersRegex: RegExp = /[,\s]+/;

	// Constructor takes an array of data types that should be detected.
	constructor(typesToDetect: Set<DataType>) {
		this.typesToDetect = typesToDetect;
	}

	setData(
		data: string,
		isMultiple = false,
		delimitersRegex = /[,\s]+/
	): void {
		this.data = data;
		this.isMultiple = isMultiple;
		this.delimitersRegex = delimitersRegex;
	}

	private isUrl(data: string): boolean {
		const urlRegex =
			/^(?!$)(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
		return urlRegex.test(data);
	}

	private isArray(data: object): boolean {
		try {
			return Array.isArray(data);
		} catch {
			return false;
		}
	}

	private parsedData = (data: string) => {
		try {
			return JSON.parse(data);
		} catch (error) {
			// Fallback to string detection if parsing fails
			return false;
		}
	};

	formatData = (data: string): string[] => {
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
				this.typesToDetect.has("array") &&
				this.isArray(this.parsedData(this.data))
			) {
				return "array";
			}

			// Detect types for each individual element.
			const detectedTypes = this.formatData(this.data).map((item) =>
				this.detectType(item)
			);

			// Check if all detected types are the same.
			const allSameType = detectedTypes.every(
				(type) => type === detectedTypes[0]
			);

			if (allSameType && this.typesToDetect.has(detectedTypes[0])) {
				return detectedTypes[0];
			}

			return "string";
		}

		return this.detectType(this.data);
	}

	private detectType(data: string): DataType {
		if (this.typesToDetect.has("url") && this.isUrl(data)) {
			return "url";
		}

		// Special case for empty array '[]' or empty object '{}' represented as strings.
		if (data === "[]" || data === "{}") {
			return "string";
		}

		const parsedData = this.parsedData(data);

		if (!parsedData) {
			return this.typesToDetect.has("string")
				? "string"
				: CANT_DETECT_DATA;
		}

		// Detect array or null
		if (this.isArray(parsedData)) {
			return this.typesToDetect.has("array") ? "array" : CANT_DETECT_DATA;
		}
		if (parsedData === null) {
			return this.typesToDetect.has("null") ? "null" : CANT_DETECT_DATA;
		}

		// Detect number, boolean, or object
		const detectedType: DataType = typeof parsedData as DataType;
		return this.typesToDetect.has(detectedType)
			? detectedType
			: CANT_DETECT_DATA;
	}
}
