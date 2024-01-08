import { Card, Form, Upload, UploadProps, message } from "antd";
import { FC, useEffect, useState } from "react";
import { Buffer } from "buffer";
import { Clipboard } from "components/ComponentInjector";
import { CodeEditor, ResponsiveButton } from "components/General";
import { isBase64Valid } from "./helper";
import { PageGrid } from "components/Layouts";
import { ClipboardButton } from "components/InjectedComponent";
import style from "./Base64.module.scss";
import { handleImageUpload } from "utils/helper-functions/files";

const Base64: FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [status, setStatus] = useState<string>("");

	const onClick = (type: string, value: string) => {
		if (type === "") return;
		if (type === "encode") {
			setResult(Buffer.from(value, "utf8").toString("base64"));
		} else {
			setInput(Buffer.from(value, "base64").toString("utf-8"));
		}
	};

	useEffect(() => {
		setStatus(isBase64Valid(result));
	}, [result]);

	const props: UploadProps = {
		name: "file",
		multiple: false,
		customRequest: (options) => {
			if (options.onSuccess) {
				options.onSuccess({}, new XMLHttpRequest());
			}
		},
		async onChange(info) {
			const { status, originFileObj, type } = info.file;
			const text = (await originFileObj?.text()) || "";
			if (status === "done") {
				if (type?.startsWith("image/")) {
					handleImageUpload(
						originFileObj as File,
						(base64String: string) => {
							setInput(text);
							setResult(base64String.split(",")[1]);
						}
					);
				} else {
					setInput(text);
					onClick("encode", text || "");
				}
				message.success(
					`${info.file.name} file uploaded successfully.`
				);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		maxCount: 1,
		accept: "*/*",
		listType: "picture",
	};

	const clear = () => {
		setInput("");
		setResult("");
	};
	return (
		<PageGrid className={style.base64}>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						label="Text"
						value={input}
						language=" "
						handleCode={(value) => {
							setInput(value || "");
							onClick("encode", value || "");
						}}
					/>
					<div className={style.base64__input}>
						<Clipboard
							text={input}
							clipboardComponent={ClipboardButton}
						/>
						<Upload {...props}>
							<ResponsiveButton>Upload File</ResponsiveButton>
						</Upload>
						<ResponsiveButton onClick={clear}>
							Clear
						</ResponsiveButton>
					</div>
				</Form>
			</Card>

			<Card>
				<Form layout="vertical">
					<CodeEditor
						status={status}
						label="Base64"
						value={result}
						language={" "}
						handleCode={(value) => {
							setResult(value || "");
							onClick("decode", value || "");
						}}
					/>
					<div className={style.base64__output}>
						<Clipboard
							text={result}
							clipboardComponent={ClipboardButton}
						/>

						<ResponsiveButton onClick={clear}>
							Clear
						</ResponsiveButton>
					</div>
				</Form>
			</Card>
		</PageGrid>
	);
};

export default Base64;
