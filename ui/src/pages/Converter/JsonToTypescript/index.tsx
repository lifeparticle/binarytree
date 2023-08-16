import TextArea from "antd/es/input/TextArea";
import JsonToTS from "json-to-ts";
import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import style from "./jsontots.module.scss";
import { Button, Input, Space } from "antd";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

import ValidationStatus from "./components/ValidationStatus";
import { isJsonValid } from "./utils/helper";

const JsonToTypescript: React.FC = () => {
	const [json, setJson] = useState("");
	const [rootName, setRootName] = useState("");
	const [interfaces, setInterfaces] = useState<string[]>([]);
	const [status, setStatus] = useState<string>("");

	const rootInterfaceName = {
		rootName: rootName || "RootObject",
	};

	function generateInterfaces() {
		try {
			const data = JSON.parse(json);
			const object: string[] = [];
			JsonToTS(data, rootInterfaceName).forEach((typeInterface) => {
				object.push(typeInterface);
			});
			setInterfaces(object);
		} catch (e) {
			setInterfaces(["Enter Valid JSON"]);
		}
	}

	useEffect(() => {
		setStatus(isJsonValid(json));
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

				<ValidationStatus status={status} />
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
