export function generateBuilderMethods(classDefinition: string): string {
	const classNameMatch = classDefinition.match(/class (\w+)/);
	if (!classNameMatch) {
		throw new Error("Class name not found");
	}
	const className = classNameMatch[1];

	const propertyLines = classDefinition
		.split("\n")
		.filter((line) => line.includes("{ get; set; }"));

	const properties = propertyLines.map((line) => {
		const parts = line.trim().split(" ");
		return { type: parts[1], name: parts[2] };
	});

	return properties
		.map((prop) => {
			const methodName = `With${prop.name}`;
			return `public ${className}Builder ${methodName}(${
				prop.type
			} ${prop.name[0].toLowerCase()}${prop.name.slice(1)}) { ${
				prop.name
			} = ${prop.name[0].toLowerCase()}${prop.name.slice(
				1
			)}; return this; }`;
		})
		.join("\n");
}
