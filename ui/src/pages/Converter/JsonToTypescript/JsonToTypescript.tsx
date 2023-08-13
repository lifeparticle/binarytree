import TextArea from "antd/es/input/TextArea";
import JsonToTS from "json-to-ts";
import { useState } from "react";

const json = {
	cats: [{ name: "Kittin" }, { name: "Mittin" }],
	favoriteNumber: 42,
	favoriteWord: "Hello",
};

const JsonToTypescript: React.FC = () => {
	const [value, setValue] = useState("");
	const [typescript, setTypescript] = useState("");

	const onTextAreaChange = (value: string) => {
		if (!value) return;
		setValue(value);
		setTypescript(JsonToTS(json).toString());
	};

	return (
		<div>
			<TextArea
				placeholder="Paste colors separated by commas or new line"
				rows={8}
				onChange={(event) =>
					onTextAreaChange(event.currentTarget.value)
				}
				value={value}
			/>
			<TextArea
				placeholder="Paste colors separated by commas or new line"
				rows={8}
				value={typescript}
			/>
		</div>
	);
};

export default JsonToTypescript;
