import { Textarea, SegmentedControl, Stack } from "@mantine/core";
import Button from "components/Button";
import { useState } from "react";
import { Buffer } from "buffer";
import style from "./Base64.module.scss";

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [value, setValue] = useState("encode");
	const onButtonClick = () => {
		if (value === "") return;
		if (value === "encode") {
			setResult(Buffer.from(input, "utf8").toString("base64"));
		} else {
			setResult(Buffer.from(input, "base64").toString("utf-8"));
		}
	};

	return (
		<div className={style.base}>
			<Textarea
				value={input}
				onChange={(currentValue) => setInput(currentValue.target.value)}
				placeholder="Input"
				label="Input"
				autosize
				minRows={10}
			/>

			<Stack className={style.base__controls}>
				<SegmentedControl
					className={style.base__buttons_segment}
					value={value}
					onChange={setValue}
					data={[
						{ label: "Encode", value: "encode" },
						{ label: "Decode", value: "decode" },
					]}
				/>

				<Button onClick={onButtonClick}>Convert</Button>
				<Button
					onClick={() => {
						setInput("");
						setResult("");
					}}
				>
					Clear
				</Button>
			</Stack>
			<Textarea
				value={result}
				onChange={(currentValue) =>
					setResult(currentValue.target.value)
				}
				label="Result"
				placeholder="Result"
				autosize
				minRows={10}
			/>
		</div>
	);
};

export default Base64;
