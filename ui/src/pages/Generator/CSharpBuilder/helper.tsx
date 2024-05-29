export function generateBuilderMethods(classDefinition: string): string {
	const classNameMatch = /class (\w+)/.exec(classDefinition);
	if (!classNameMatch) {
		return "Class name not found";
	}
	const className = classNameMatch[1];

	// public int Id {get;set;}
	const propertyLines = classDefinition
		.split("\n")
		.filter((line) => line.trim().match(/\{\s*get\s*;\s*set\s*;\s*\}/));

	const properties = propertyLines.map((line) => {
		const parts = line.trim().split(" ");
		return { dataType: parts[1], propertyName: parts[2] };
	});

	const builderProperties = properties
		.map((prop) => {
			const methodName = `With${prop.propertyName}`;

			return `\tpublic ${className}Builder ${methodName}(${
				prop.dataType
			} ${prop.propertyName[0].toLowerCase()}${prop.propertyName.slice(
				1
			)}) { ${
				prop.propertyName
			} = ${prop.propertyName[0].toLowerCase()}${prop.propertyName.slice(
				1
			)}; return this; }`;
		})
		.join("\n");

	return `public class ${className}Builder : ${className} {\n
${builderProperties}
\n}`;
}
