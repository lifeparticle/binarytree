import JsonToTS from "json-to-ts";
import { useEffect, useState } from "react";
import style from "./JsonToTypescript.module.scss";
import { Button, Card, Form, Space } from "antd";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import TextareaWithValidation from "components/General/TextareaWithValidation";
import InputComponent from "components/General/InputComponent";
import { isJsonValid } from "./utils/helper";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import PageGrid from "components/Layouts/PageGrid";

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
		<PageGrid>
			<Card className={style.json}>
				<Form layout="vertical">
					<TextareaWithValidation
						value={json}
						onChange={(e) => {
							setJson(e.target.value);
						}}
						label="Provide Json Input"
						placeholder="JSON"
						rows={8}
						status={status}
					/>

					<InputComponent
						label="Root Interface Name"
						placeholder="Enter Interface name"
						value={rootName}
						onChange={(e) => setRootName(e.target.value)}
						type="text"
					/>

					<Space>
						<Button
							onClick={generateInterfaces}
							disabled={json.length === 0}
							size="large"
						>
							Convert
						</Button>
					</Space>
				</Form>
			</Card>

			{interfaces.length > 0 && (
				<Card>
					<CodeHighlightWithCopy
						codeString={interfaces.toString()}
						language="typescript"
					/>
				</Card>
			)}
		</PageGrid>
	);
};

export default JsonToTypescript;
