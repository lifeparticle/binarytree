import { Button, Input, Space } from "antd";
import { useState } from "react";
import { Buffer } from "buffer";
import style from "./Base64.module.scss";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

const { TextArea } = Input;

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

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

	return (
		<div className={style.base}>
			<TextArea
				value={input}
				onChange={(currentValue) => {
					setInput(currentValue.target.value);
					onClick("encode", currentValue.target.value);
				}}
				placeholder="Input"
				autoSize={{ minRows: 10 }}
			/>

			<Space>
				<Button
					disabled={IS_INPUT_EMPTY}
					onClick={() => setInput("")}
					role="clear_text"
				>
					Clear
				</Button>
				<Clipboard text={input} clipboardComponent={ClipboardButton} />
			</Space>

			<TextArea
				value={result}
				onChange={(currentValue) => {
					setResult(currentValue.target.value);
					onClick("decode", currentValue.target.value);
				}}
				placeholder="Result"
				autoSize={{ minRows: 10 }}
			/>
			<Space>
				<Button
					disabled={IS_RESULT_EMPTY}
					onClick={() => setResult("")}
					role="clear_base64"
				>
					Clear
				</Button>
				<Clipboard text={result} clipboardComponent={ClipboardButton} />
			</Space>
		</div>
	);
};

export default Base64;
