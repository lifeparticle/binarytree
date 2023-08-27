import JsonToTS from "json-to-ts";
import { useEffect, useState } from "react";
import style from "./JsonToTypescript.module.scss";
import { Button, Card, Col, Form, Row, Space } from "antd";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import TextareaWithValidation from "components/General/TextareaWithValidation";
import CopyInput from "components/Layouts/CopyInput";
import InputComponent from "components/General/InputComponent";
import { isJsonValid } from "./utils/helper";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";

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
		<Row gutter={[16, 16]}>
			<Col xs={24} sm={24} md={24} lg={12}>
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

						<CopyInput>
							<InputComponent
								label="Root Interface Name"
								placeholder="Enter Interface name"
								value={rootName}
								onChange={(e) => setRootName(e.target.value)}
								type="text"
							/>
						</CopyInput>

						<Space>
							<Button
								onClick={generateInterfaces}
								disabled={json.length === 0}
								size="large"
							>
								Convert
							</Button>
							<Clipboard
								clipboardComponent={ClipboardButton}
								text={
									json.length === 0
										? ""
										: interfaces
												.toString()
												.replace(/,/g, "\n\n")
								}
							/>
						</Space>
					</Form>
				</Card>
			</Col>

			{interfaces.length > 0 && (
				<Col xs={24} sm={24} md={24} lg={12}>
					<Card>
						<CodeHighlightWithCopy
							codeString={interfaces.toString()}
							language="typescript"
						/>
					</Card>
				</Col>
			)}
		</Row>
	);
};

export default JsonToTypescript;
