import { DataDetection, DataType } from "utils/helper-classes/DataDetection";

describe("DataDetection", () => {
	const testData = [
		{ types: ["string"], data: "This is a string", expected: "string" },
		{ types: ["url"], data: "https://binarytree.dev/", expected: "url" },
		{ types: ["number"], data: "123", expected: "number" },
		{ types: ["array"], data: "[1,2,3]", expected: "array" },
		{ types: ["object"], data: '{"key": "value"}', expected: "object" },
		{ types: ["boolean"], data: "true", expected: "boolean" },
		{
			types: ["number"],
			data: "Unsupported data",
			expected: "Can't detect data",
		},
		{
			types: ["number", "string"],
			data: "123, Some string",
			expected: "string",
			isMultiple: true,
		},
		{
			types: ["number", "string"],
			data: "1, 2",
			expected: "number",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: "[1, 2]",
			expected: "array",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: '["1", "2"]',
			expected: "array",
			isMultiple: true,
		},
	];

	testData.forEach(({ types, data, expected, isMultiple = false }) => {
		test(`should detect "${expected}" type correctly`, () => {
			const detector = new DataDetection(new Set(types as DataType[]));
			detector.setData(data, isMultiple);
			expect(detector.detect()).toBe(expected);
		});
	});
});

describe("DataDetection", () => {
	test('should detect "No data" when data is null', () => {
		const detector = new DataDetection(new Set(["string"]));
		expect(detector.detect()).toBe("No data");
	});
});
