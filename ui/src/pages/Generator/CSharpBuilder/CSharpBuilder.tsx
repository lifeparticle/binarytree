import { FC, useEffect, useState } from "react";
import { Card, Form } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { CodeEditor } from "components/General";
import { PageGrid } from "components/Layouts";
import { ClipboardButton } from "components/InjectedComponent";
import { generateBuilderMethods } from "./helper";

const CSharpBuilde: FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [imports, setImports] = useState("using Bogus;");
	const [useImports, setUseImports] = useState(
		"private static Faker faker = new();"
	);

	useEffect(() => {
		setResult(
			generateBuilderMethods(
				input,
				`${imports}\n\n`,
				`\t${useImports}\n\n`
			)
		);
	}, [imports, useImports, input]);

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<PageGrid>
						<CodeEditor
							label="Imports"
							value={imports}
							language="csharp"
							height="17dvh"
							handleCode={(value) => {
								setImports(value ?? "");
							}}
						/>
						<CodeEditor
							label="Use Import"
							value={useImports}
							language="csharp"
							height="17dvh"
							handleCode={(value) => {
								setUseImports(value ?? "");
							}}
						/>
					</PageGrid>

					<CodeEditor
						label="Class"
						value={input}
						language="csharp"
						handleCode={(value) => {
							setInput(value ?? "");
						}}
					/>
					<Clipboard
						text={input}
						clipboardComponent={ClipboardButton}
					/>
				</Form>
			</Card>

			<Card>
				<Form layout="vertical">
					<CodeEditor
						label="Builder output"
						value={result}
						language="csharp"
						height="72.5dvh"
					/>
					<Clipboard
						text={result}
						clipboardComponent={ClipboardButton}
					/>
				</Form>
			</Card>
		</PageGrid>
	);
};

export default CSharpBuilde;
