import { DataDetection, DataType } from "utils/helper-classes/DataDetection";
import { faker } from "@faker-js/faker";

describe("DataDetection", () => {
	const testData = [
		{ types: ["string"], data: faker.random.word(), expected: "string" },
		{ types: ["url"], data: faker.internet.url(), expected: "url" },
		{
			types: ["number"],
			data: faker.datatype.number().toString(),
			expected: "number",
		},
		{
			types: ["array"],
			data: JSON.stringify([
				faker.datatype.number(),
				faker.datatype.number(),
			]),
			expected: "array",
		},
		{
			types: ["object"],
			data: JSON.stringify({ key: faker.random.word() }),
			expected: "object",
		},
		{
			types: ["boolean"],
			data: faker.datatype.boolean().toString(),
			expected: "boolean",
		},
		{
			types: ["number"],
			data: faker.lorem.sentence(),
			expected: "Can't detect data",
		},
		{
			types: ["number", "string"],
			data: `${faker.datatype.number()}, ${faker.random.words()}`,
			expected: "string",
			isMultiple: true,
		},
		{
			types: ["number", "string"],
			data: `${faker.datatype.number()}, ${faker.datatype.number()}`,
			expected: "number",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: JSON.stringify([
				faker.datatype.number(),
				faker.datatype.number(),
			]),
			expected: "array",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: JSON.stringify([faker.random.word(), faker.random.word()]),
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
