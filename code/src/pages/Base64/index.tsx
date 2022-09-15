import { Textarea, SegmentedControl, Button } from "@mantine/core";
import { useState } from "react";

const Base64: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [value, setValue] = useState("encode");
	const onButtonClick = () => {
		if (value === "") return;
		if (value === "encode") {
			setResult(btoa(input));
		} else {
			setResult(atob(input));
		}
	};

	return (
		<>
			<Textarea
				value={input}
				onChange={(currentValue) => setInput(currentValue.target.value)}
				placeholder="Input"
				label="Input"
				autosize
			/>

			<Textarea
				value={result}
				onChange={(currentValue) =>
					setResult(currentValue.target.value)
				}
				label="Result"
				placeholder="Result"
				autosize
				minRows={2}
			/>

			<SegmentedControl
				value={value}
				onChange={setValue}
				data={[
					{ label: "Encode", value: "encode" },
					{ label: "Decode", value: "decode" },
				]}
			/>

			<Button onClick={onButtonClick}>Convert</Button>
		</>
	);
};

export default Base64;
