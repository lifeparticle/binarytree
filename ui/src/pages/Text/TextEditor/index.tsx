import { Badge, Button, Card, Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import style from "./TextEditor.module.scss";
import "./quill.css";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";

const TextEditor: React.FC = () => {
	const [value, onChange] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);

	useEffect(() => {
		const cleanValue = value.replace(/(<([^>]+)>)/gi, " ").trim();
		if (cleanValue === "") {
			setWordCount(0);
			setCharCount(0);
			setCharCountWithoutSpace(0);
			return;
		}
		setWordCount(cleanValue.split(/[\s]+/g).length);
		setCharCount(cleanValue.replace(/[\s]+/g, " ").length);
		setCharCountWithoutSpace(cleanValue.replace(/[\s]+/g, "").length);
	}, [value]);

	return (
		<Card>
			<div className={style.te}>
				<Row gutter={16}>
					<Col span={20}>
						<ReactQuill
							id="quill"
							theme="snow"
							value={value}
							onChange={onChange}
						/>
					</Col>

					<Col span={4}>
						<Card>
							<div>
								<span>Word count:</span>
								<Badge
									count={wordCount}
									style={{ backgroundColor: "#52c41a" }}
								/>{" "}
							</div>
							<div>
								<span>Character with space: </span>
								<Badge
									count={charCount}
									style={{ backgroundColor: "#52c41a" }}
									overflowCount={999}
								/>{" "}
							</div>
							<div>
								<span>Character without space: </span>
								<Badge
									count={charCountWithoutSpace}
									style={{ backgroundColor: "#52c41a" }}
									overflowCount={999}
								/>
							</div>
						</Card>
					</Col>
				</Row>

				<Space>
					<Button
						onClick={() => {
							onChange("");
						}}
					>
						Clear
					</Button>

					<Clipboard
						text={value}
						clipboardComponent={ClipboardButton}
					/>
				</Space>
			</div>
		</Card>
	);
};

export default TextEditor;
