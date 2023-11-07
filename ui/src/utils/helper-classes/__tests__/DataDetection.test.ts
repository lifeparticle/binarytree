import { DataDetection } from "utils/helper-classes/DataDetection";

describe("DataDetection", () => {
	test('should detect "No data" when data is null', () => {
		const detector = new DataDetection(["string"]);
		expect(detector.detect()).toBe("No data");
	});

	test('should detect "url" type correctly', () => {
		const detector = new DataDetection(["url"]);
		detector.setData("https://binarytree.dev/");
		expect(detector.detect()).toBe("url");
	});

	test('should detect "string" type correctly', () => {
		const detector = new DataDetection(["string"]);
		detector.setData("This is a string");
		expect(detector.detect()).toBe("string");
	});

	test('should detect "number" type correctly', () => {
		const detector = new DataDetection(["number"]);
		detector.setData("123");
		expect(detector.detect()).toBe("number");
	});

	test('should detect "array" type when JSON string is provided', () => {
		const detector = new DataDetection(["array"]);
		detector.setData("[1,2,3]");
		expect(detector.detect()).toBe("array");
	});

	test('should detect "object" type when JSON object string is provided', () => {
		const detector = new DataDetection(["object"]);
		detector.setData('{"key": "value"}');
		expect(detector.detect()).toBe("object");
	});

	test('should detect "boolean" type correctly', () => {
		const detector = new DataDetection(["boolean"]);
		detector.setData("true");
		expect(detector.detect()).toBe("boolean");
	});

	test('should return "Can\'t detect data" for unsupported types', () => {
		const detector = new DataDetection(["number"]);
		detector.setData("Unsupported type");
		expect(detector.detect()).toBe("Can't detect data");
	});

	test("should detect string multiple data types when isMultiple is true", () => {
		const detector = new DataDetection(["number", "string"]);
		detector.setData("123, Some string", true);
		expect(detector.detect()).toBe("string");
	});

	test("should detect number multiple data types when isMultiple is true", () => {
		const detector = new DataDetection(["number", "string"]);
		detector.setData("1, 2", true);
		expect(detector.detect()).toBe("number");
	});

	test("should detect array of numbers multiple data types when isMultiple is true", () => {
		const detector = new DataDetection(["number", "string", "array"]);
		detector.setData("[1, 2]", true);
		expect(detector.detect()).toBe("array");
	});

	test("should detect array of strings multiple data types when isMultiple is true", () => {
		const detector = new DataDetection(["number", "string", "array"]);
		detector.setData('["1", "2"]', true);
		expect(detector.detect()).toBe("array");
	});
});
