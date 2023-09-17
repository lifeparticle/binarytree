import { Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { isBase64Valid } from "./utils/helper";
import TextareaWithValidation from "components/General/TextareaWithValidation";
import PageGrid from "components/Layouts/PageGrid";

const { TextArea } = Input;

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
					<Form.Item label="Text">
						<TextArea
							value={input}
							onChange={(currentValue) => {
								setInput(currentValue.target.value);
								onClick("encode", currentValue.target.value);
							}}
							placeholder="Decoded text"
							rows={10}
							data-gramm={false}
							allowClear
						/>
					</Form.Item>

					<Clipboard
						text={input}
						clipboardComponent={ClipboardButton}
					/>
				</Form>
			</Card>

			<Card>
				<Form layout="vertical">
					<TextareaWithValidation
						value={result}
						onChange={(currentValue) => {
							const value = currentValue.target.value;
							setResult(value);
							onClick("decode", value);
						}}
						rows={10}
						placeholder="Encoded text"
						status={status}
						label="Base64"
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
