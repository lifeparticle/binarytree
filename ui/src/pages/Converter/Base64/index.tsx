import { Button, Card, Form, Space, Input } from "antd";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import style from "./Base64.module.scss";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { isBase64Valid } from "./utils/helper";
import TextareaWithValidation from "components/General/TextareaWithValidation";

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

	const IS_INPUT_EMPTY = input.length === 0;
	const IS_RESULT_EMPTY = result.length === 0;

	useEffect(() => {
		setStatus(isBase64Valid(result));
	}, [result]);

	return (
		<Card>
			<Form layout="vertical" className={style.base}>
				<Form.Item label="Text input">
					<TextArea
						value={input}
						onChange={(currentValue) => {
							setInput(currentValue.target.value);
							onClick("encode", currentValue.target.value);
						}}
						placeholder="Input"
						rows={4}
						data-gramm={false}
					/>
				</Form.Item>

				<Space>
					<Button
						disabled={IS_INPUT_EMPTY}
						onClick={() => setInput("")}
						role="clear_text"
					>
						Clear
					</Button>
					<Clipboard
						text={input}
						clipboardComponent={ClipboardButton}
					/>
				</Space>

				<TextareaWithValidation
					value={result}
					onChange={(currentValue) => {
						const value = currentValue.target.value;
						setResult(value);
						onClick("decode", value);
					}}
					placeholder="Result"
					status={status}
					label="Base 64 output"
				/>

				<Space>
					<Button
						disabled={IS_RESULT_EMPTY}
						onClick={() => setResult("")}
						role="clear_base64"
					>
						Clear
					</Button>
					<Clipboard
						text={result}
						clipboardComponent={ClipboardButton}
					/>
				</Space>
			</Form>
		</Card>
	);
};

export default Base64;
