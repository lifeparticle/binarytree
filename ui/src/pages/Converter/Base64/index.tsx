import { Button, Input, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { Buffer } from "buffer";
import style from "./Base64.module.scss";

const { TextArea } = Input;

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [value, setValue] = useState("encode");

	const onClick = () => {
		if (value === "") return;
		if (value === "encode") {
			setResult(Buffer.from(input, "utf8").toString("base64"));
		} else {
			setResult(Buffer.from(input, "base64").toString("utf-8"));
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

			<div className={style.base__controls}>
				<Radio.Group
					className={style.base__controls_radio}
					onChange={(e: RadioChangeEvent) => setValue(e.target.value)}
					defaultValue={value}
				>
					<Radio.Button value="encode">Encode</Radio.Button>
					<Radio.Button value="decode">Decode</Radio.Button>
				</Radio.Group>

				<Button onClick={onClick}>Convert</Button>
				<Button
					onClick={() => {
						setInput("");
						setResult("");
					}}
				>
					Clear
				</Button>
			</div>
			<TextArea
				value={result}
				onChange={(currentValue) =>
					setResult(currentValue.target.value)
				}
				placeholder="Result"
				autoSize={{ minRows: 10 }}
			/>
		</div>
	);
};

export default Base64;
