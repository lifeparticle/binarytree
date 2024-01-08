import { FC, useState } from "react";
import { Card, Form } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { CodeEditor } from "components/General";
import { PageGrid } from "components/Layouts";
import { ClipboardButton } from "components/InjectedComponent";
import { generateBuilderMethods } from "./helper";

const CSharpBuilde: FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const onClick = (value: string) => {
		setResult(generateBuilderMethods(value));
	};

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						label="Class"
						value={input}
						language="csharp"
						handleCode={(value) => {
							setInput(value || "");
							onClick(value || "");
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
