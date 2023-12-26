import { DataDetection, DataType } from "utils/helper-classes/DataDetection";
import { faker } from "@faker-js/faker";

describe("DataDetection", () => {
	const testData = [
		{ types: ["string"], data: faker.lorem.word(), expected: "string" },
		{ types: ["url"], data: faker.internet.url(), expected: "url" },
		{
			types: ["number"],
			data: faker.number.int().toString(),
			expected: "number",
		},
		{
			types: ["array"],
			data: JSON.stringify([faker.number.int(), faker.number.int()]),
			expected: "array",
		},
		{
			types: ["object"],
			data: JSON.stringify({ key: faker.lorem.word() }),
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
			data: `${faker.number.int()}, ${faker.lorem.words()}`,
			expected: "string",
			isMultiple: true,
		},
		{
			types: ["number", "string"],
			data: `${faker.number.int()}, ${faker.number.int()}`,
			expected: "number",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: JSON.stringify([faker.number.int(), faker.number.int()]),
			expected: "array",
			isMultiple: true,
		},
		{
			types: ["number", "string", "array"],
			data: JSON.stringify([faker.lorem.word(), faker.lorem.word()]),
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
