import { generateBuilderMethods } from "pages/Generator/CSharpBuilder/helper";

describe("generateBuilderMethods", () => {
	// it("should extract the correct class name and generate builder methods", () => {
	// 	const classDefinition = `
	//         public class TestClass {
	//             public string PropertyOne { get; set; }
	//             public int PropertyTwo { get; set; }
	//         }
	//     `;

	// 	const expectedOutput = `public class TestClassBuilder : TestClass {\n\tpublic TestClassBuilder WithPropertyOne(string propertyOne) { PropertyOne = propertyOne; return this; }\n\tpublic TestClassBuilder WithPropertyTwo(int propertyTwo) { PropertyTwo = propertyTwo; return this; }\n}`;

	// 	expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	// });

	it("should return an error message when class name is not found", () => {
		const classDefinition = `public string SomeProperty { get; set; }`;

		expect(generateBuilderMethods(classDefinition)).toBe(
			"Class name not found"
		);
	});

	// it("should return an error message when input is empty", () => {
	// 	const classDefinition = "";

	// 	expect(generateBuilderMethods(classDefinition)).toBe(
	// 		"Class name not found"
	// 	);
	// });

	// it("should return an empty string if there are no properties", () => {
	// 	const classDefinition = "";

	// 	expect(generateBuilderMethods(classDefinition)).toBe("");
	// });

	// it("should generate builder methods for single property", () => {
	// 	const classDefinition = `
	//         public class SinglePropertyClass {
	//             public bool IsEnabled { get; set; }
	//         }
	//     `;

	// 	const expectedOutput = `public class SinglePropertyClassBuilder : SinglePropertyClass {\n\tpublic SinglePropertyClassBuilder WithIsEnabled(bool isEnabled) { IsEnabled = isEnabled; return this; }\n}`;

	// 	expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	// });

	// it("should handle properties with different access modifiers", () => {
	// 	const classDefinition = `
	//         public class MixedAccessClass {
	//             public string Name { get; private set; }
	//             public int Age { get; set; }
	//         }
	//     `;

	// 	const expectedOutput = `public class MixedAccessClassBuilder : MixedAccessClass {\n\tpublic MixedAccessClassBuilder WithName(string name) { Name = name; return this; }\n\tpublic MixedAccessClassBuilder WithAge(int age) { Age = age; return this; }\n}`;

	// 	expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	// });
});
