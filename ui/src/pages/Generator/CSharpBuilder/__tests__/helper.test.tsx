import { generateBuilderMethods } from "pages/Generator/CSharpBuilder/helper";

describe("generateBuilderMethods", () => {
	it("should extract the correct class name and generate builder methods", () => {
		const classDefinition = `
            public class TestClass {
                public string PropertyOne { get; set; }
                public int PropertyTwo { get; set; }
            }
        `;

		const expectedOutput = `public TestClassBuilder WithPropertyOne(string propertyOne) { PropertyOne = propertyOne; return this; }\npublic TestClassBuilder WithPropertyTwo(int propertyTwo) { PropertyTwo = propertyTwo; return this; }`;

		expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	});

	it("should throw an error when class name is not found", () => {
		const classDefinition = `public string SomeProperty { get; set; }`;

		expect(() => generateBuilderMethods(classDefinition)).toThrow(
			"Class name not found"
		);
	});

	it("should handle an empty input", () => {
		const classDefinition = ``;

		expect(() => generateBuilderMethods(classDefinition)).toThrow(
			"Class name not found"
		);
	});

	it("should return an empty string if there are no properties", () => {
		const classDefinition = `public class TestClass { }`;

		expect(generateBuilderMethods(classDefinition)).toBe("");
	});
});
