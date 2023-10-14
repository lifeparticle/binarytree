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
	data: string | null = null;
	typesToDetect: DataType[];

	constructor(typesToDetect: DataType[]) {
		this.typesToDetect = typesToDetect;
	}

	setData(data: string): void {
		this.data = data;
	}

	private isUrl(): boolean {
		const urlRegex =
			/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
		return urlRegex.test(this.data as string);
	}

	detect(): DataType {
		if (!this.data) {
			return "No data";
		}

		if (this.typesToDetect.includes("url") && this.isUrl()) {
			return "url";
		}

		try {
			const parsedData = JSON.parse(this.data);
			const actualType: DataType = Array.isArray(parsedData)
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

		if (this.data === "[]" || this.data === "{}") return "string";

		return "Can't detect data";
	}
}
