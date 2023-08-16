import TextArea from "antd/es/input/TextArea";
import JsonToTS from "json-to-ts";
import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import style from "./jsontots.module.scss";
import { Button, Input, Space } from "antd";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
import { Check, X } from "lucide-react";

const JsonToTypescript: React.FC = () => {
	const [json, setJson] = useState("");
	const [rootName, setRootName] = useState("");
	const [interfaces, setInterfaces] = useState<string[]>([]);
	const [isValidInput, setIsValidInput] = useState<string>("");

	function generateInterfaces() {
		if (!json.length) {
			setInterfaces(["Paste JSON"]);
			return;
		}
		try {
			const data = JSON.parse(json);
			const object: string[] = [];
			JsonToTS(data, {
				rootName: rootName || "RootObject",
			}).forEach((typeInterface) => {
				object.push(typeInterface);
			});
			setInterfaces(object);
		} catch (e) {
			setInterfaces(["Enter Valid JSON"]);
		}
	}

	useEffect(() => {
		function validateFunc() {
			try {
				JSON.parse(json);
				setIsValidInput("valid");
			} catch (error) {
				setIsValidInput("invalid");
			}
		}

		validateFunc();
	}, [json]);

	return (
		<div className={style.json}>
			<div className={style.json__textarea}>
				<TextArea
					placeholder="JSON"
					rows={8}
					onChange={(event) => setJson(event.target.value)}
					value={json}
					autoCorrect="off"
					typeof="string"
				/>

				<Space className={style.json__textarea__validator}>
					{isValidInput.length === 0 ? null : isValidInput ===
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

			<Input
				placeholder="Root Interface name"
				value={rootName}
				onChange={(e) => setRootName(e.target.value)}
			/>

			{interfaces.length > 0 && (
				<Highlight
					code={interfaces
						.map((int) => "export " + int)
						.join("\n\n")
						.trim()}
					language="typescript"
					theme={themes.okaidia}
				>
					{({ style, tokens, getLineProps, getTokenProps }) => (
						<pre style={style}>
							{tokens.map((line, i) => (
								<div key={i} {...getLineProps({ line })}>
									<span>{i + 1}</span>
									{line.map((token, key) => (
										<span
											key={key}
											{...getTokenProps({ token })}
										/>
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			)}
			<Space>
				<Button
					onClick={generateInterfaces}
					disabled={json.length === 0}
				>
					Convert
				</Button>
				<Clipboard
					clipboardComponent={ClipboardButton}
					text={json.length === 0 ? "" : "Interface copied"}
				/>
			</Space>
		</div>
	);
};

export default JsonToTypescript;
