import { Card, Form } from "antd";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { isBase64Valid } from "./utils/helper";
import PageGrid from "components/Layouts/PageGrid";
import CodeEditor from "components/General/CodeEditor";

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [status, setStatus] = useState<string>("");

	const onClick = (type: string, value: string) => {
		if (type === "") return;
		if (type === "encode") {
			setResult(Buffer.from(value, "utf8").toString("base64"));
		} else {
			setInput(Buffer.from(value, "base64").toString("utf-8"));
		}
	};

	useEffect(() => {
		setStatus(isBase64Valid(result));
	}, [result]);

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						status={status}
						label="Text"
						code={input}
						language={" "}
						handleCode={(value) => {
							setInput(value || "");
							onClick("encode", value || "");
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
						language={" "}
						handleCode={(value) => {
							setResult(value || "");
							onClick("decode", value || "");
						}}
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

export default Base64;
