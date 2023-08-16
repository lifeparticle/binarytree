import { Alert, Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import style from "./Base64.module.scss";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
import { Check, X } from "lucide-react";

const { TextArea } = Input;

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [isValidBase64, setIsValidBase64] = useState<string>("");

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
		function checkValidBase64(input: string) {
			const base64Pattern =
				/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

			setIsValidBase64(
				base64Pattern.test(input.trim()) ? "valid" : "invalid"
			);
		}

		checkValidBase64(result);
	}, [result]);

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

			<div className={style.base__base64Container}>
				<TextArea
					value={result}
					onChange={(currentValue) => {
						const value = currentValue.target.value;
						setResult(value);
						onClick("decode", value);
					}}
					placeholder="Result"
					autoSize={{ minRows: 10 }}
				/>

				<Space className={style.base__base64Container__validator}>
					{isValidBase64.length === 0 ? null : isValidBase64 ===
					  "valid" ? (
						<Button size="small" style={{ borderColor: "green" }}>
							<Check color="green" size={16} />
						</Button>
					) : (
						<Button size="small" danger>
							<X size={16} />
						</Button>
					)}
				</Space>
			</div>

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
