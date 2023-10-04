import JsonToTS from "json-to-ts";
import { useEffect, useState } from "react";
import style from "./JsonToTypescript.module.scss";
import { Card, Form, Space } from "antd";
import { isJsonValid } from "./utils/helper";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import PageGrid from "components/Layouts/PageGrid";
import {
	ResponsiveButton,
	ResponsiveInputWithLabel,
} from "components/General/FormComponents";
import Warning from "components/General/Warning";
import CodeEditor from "components/General/CodeEditor";

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
		<PageGrid className={style.json}>
			<Card className={style.json__input}>
				<Form layout="vertical">
					<CodeEditor
						label="Enter Json input"
						language="json"
						code={json}
						handleCode={(value) => setJson(value || "")}
						status={status}
					/>

					<ResponsiveInputWithLabel
						label="Root Interface name"
						placeholder="Enter Interface name"
						value={rootName}
						onChange={(e) => setRootName(e.target.value)}
						type="text"
					/>

					<Space>
						<ResponsiveButton
							onClick={generateInterfaces}
							disabled={json.length === 0}
						>
							Convert
						</ResponsiveButton>
					</Space>
				</Form>
			</Card>

			<Card className={style.json__output}>
				{interfaces.toString().length > 0 ? (
					<CodeHighlightWithCopy
						codeString={interfaces.toString().replace(/,/g, "\n\n")}
						language="typescript"
					/>
				) : (
					<div className={style.json__output_warning}>
						<Warning text="There is no data for JSON, please provide data first." />
					</div>
				)}
			</Card>
		</PageGrid>
	);
};

export default JsonToTypescript;
