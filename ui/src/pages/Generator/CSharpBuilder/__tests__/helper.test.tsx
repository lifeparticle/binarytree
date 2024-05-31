import { generateBuilderMethods } from "pages/Generator/CSharpBuilder/helper";

describe("generateBuilderMethods", () => {
	it("should extract the correct class name and generate builder methods", () => {
		const classDefinition = `
	        public class TestClass {
	            public string PropertyOne { get; set; }
	            public int PropertyTwo { get; set; }
	        }
	    `;

		const buildMethod = `\tpublic TestClass Build()\n\t{\n\t\treturn new TestClass() \n\t\t{\n\t\t\tPropertyOne = PropertyOne,\n\t\t\tPropertyTwo = PropertyTwo\n\t\t};\n\t}`;

		const expectedOutput = `public class TestClassBuilder : TestClass \n{\n\tpublic TestClassBuilder WithPropertyOne(string propertyOne) { PropertyOne = propertyOne; return this; }\n\tpublic TestClassBuilder WithPropertyTwo(int propertyTwo) { PropertyTwo = propertyTwo; return this; }\n\n${buildMethod}\n}`;

		expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	});

	it("should return an error message when class name is not found", () => {
		const classDefinition = `public string SomeProperty { get; set; }`;

		expect(generateBuilderMethods(classDefinition)).toBe(
			"Class name not found"
		);
	});

	it("should return an error message when input is empty", () => {
		const classDefinition = "";

		expect(generateBuilderMethods(classDefinition)).toBe(
			"Class name not found"
		);
	});

	const buildMethod = `\tpublic SinglePropertyClass Build()\n\t{\n\t\treturn new SinglePropertyClass() \n\t\t{\n\t\t\tIsEnabled = IsEnabled\n\t\t};\n\t}`;

	it("should generate builder methods for single property", () => {
		const classDefinition = `
			public class SinglePropertyClass {
				public bool IsEnabled { get; set; }
			}
		`;

		const expectedOutput = `public class SinglePropertyClassBuilder : SinglePropertyClass \n{\n\tpublic SinglePropertyClassBuilder WithIsEnabled(bool isEnabled) { IsEnabled = isEnabled; return this; }\n\n${buildMethod}\n}`;

		expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	});

	it("should handle properties with different access modifiers", () => {
		const classDefinition = `
			public class MixedAccessClass {
				public string Name { get; private set; }
				public int Age { get; set; }
			}
		`;

		const expectedOutput = `public class MixedAccessClassBuilder : MixedAccessClass \n{\n\tpublic MixedAccessClassBuilder WithName(string name) { Name = name; return this; }\n\tpublic MixedAccessClassBuilder WithAge(int age) { Age = age; return this; }\n\n\tpublic MixedAccessClass Build()\n\t{\n\t\treturn new MixedAccessClass() \n\t\t{\n\t\t\tName = Name,\n\t\t\tAge = Age\n\t\t};\n\t}\n}`;

		expect(generateBuilderMethods(classDefinition)).toBe(expectedOutput);
	});
});
