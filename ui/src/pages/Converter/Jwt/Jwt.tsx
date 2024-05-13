import { FC, useState } from "react";
import style from "./Jwt.module.scss";
import { InvalidTokenError, jwtDecode } from "jwt-decode";
import { Card, Form } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { CodeEditor, ResponsiveButton } from "components/General";
import { PageGrid } from "components/Layouts";
import { ClipboardButton } from "components/InjectedComponent";

const Jwt: FC = () => {
	const [input, setInput] = useState("");
	const [payload, setPayload] = useState("");
	const [header, setHeader] = useState("");
	const [status, setStatus] = useState<string>("");

	const onClick = (value: string) => {
		try {
			setPayload(JSON.stringify(jwtDecode(value), null, "\t"));
			setHeader(
				JSON.stringify(jwtDecode(value, { header: true }), null, "\t")
			);
			setStatus("valid");
		} catch (error) {
			if (error instanceof InvalidTokenError) {
				setStatus("invalid");
			}
		}
	};

	return (
		<PageGrid className={style.jwt}>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						status={status}
						label="Encoded"
						value={input}
						language=" "
						handleCode={(value) => {
							setInput(value ?? "");
							onClick(value ?? "");
						}}
					/>
					<div className={style.jwt__input}>
						<Clipboard
							text={input}
							clipboardComponent={ClipboardButton}
						/>

						<ResponsiveButton onClick={() => setInput("")}>
							Clear
						</ResponsiveButton>
					</div>
				</Form>
			</Card>
			<Card>
				<Form layout="vertical">
					<CodeEditor
						status={status}
						label="HEADER"
						value={header}
						language="json"
						height="20vh"
					/>
					<div className={style.jwt__output}>
						<Clipboard
							text={header}
							clipboardComponent={ClipboardButton}
						/>

						<ResponsiveButton onClick={() => setHeader("")}>
							Clear
						</ResponsiveButton>
					</div>
					<CodeEditor
						status={status}
						label="PAYLOAD"
						value={payload}
						language="json"
						height="20vh"
					/>
					<div className={style.jwt__output}>
						<Clipboard
							text={header}
							clipboardComponent={ClipboardButton}
						/>

						<ResponsiveButton onClick={() => setPayload("")}>
							Clear
						</ResponsiveButton>
					</div>
				</Form>
			</Card>
		</PageGrid>
	);
};

export default Jwt;
