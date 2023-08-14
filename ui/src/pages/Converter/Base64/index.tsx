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

	const onClick = (type: string) => {
		if (type === "") return;
		if (type === "encode") {
			setResult(Buffer.from(input, "utf8").toString("base64"));
		} else {
			setInput(Buffer.from(result, "base64").toString("utf-8"));
		}
	};

	return (
		<div className={style.base}>
			<TextArea
				value={input}
				onChange={(currentValue) => setInput(currentValue.target.value)}
				placeholder="Input"
				autoSize={{ minRows: 10 }}
			/>

			<Space>
				<Button onClick={() => onClick("encode")}>
					Text to Base64
				</Button>
				<Clipboard text={input} clipboardComponent={ClipboardButton} />
				<Button onClick={() => setInput("")} role="clear_text">
					Clear
				</Button>
			</Space>

			<TextArea
				value={result}
				onChange={(currentValue) =>
					setResult(currentValue.target.value)
				}
				placeholder="Result"
				autoSize={{ minRows: 10 }}
			/>
			<Space>
				<Button onClick={() => onClick("decode")}>
					Base64 to Text
				</Button>
				<Clipboard text={result} clipboardComponent={ClipboardButton} />
				<Button onClick={() => setResult("")} role="clear_base64">
					Clear
				</Button>
			</Space>
		</div>
	);
};

export default Base64;
