import React from "react";
import { Card, Form } from "antd";
import { useEffect, useState } from "react";
import { Clipboard } from "components/ComponentInjector";
import { CodeEditor } from "components/General";
import { PageGrid } from "components/Layouts";
import { ClipboardButton } from "components/InjectedComponent";
import { isBase64Valid } from "pages/Converter/Base64/utils/helper";
import { generateBuilderMethods } from "./helper";

const CSharpBuilde: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [status, setStatus] = useState<string>("");

	const onClick = (value: string) => {
		setResult(generateBuilderMethods(value));
	};

	useEffect(() => {
		setStatus(isBase64Valid(result));
	}, [result]);

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						label="Text"
						code={input}
						language={"csharp"}
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
						status={status}
						label="Base64"
						code={result}
						language={"csharp"}
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
