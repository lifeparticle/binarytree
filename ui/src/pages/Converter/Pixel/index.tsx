import { useState } from "react";
import style from "./Pixel.module.scss";
import { Card, Form } from "antd";
import InputComponent from "components/General/InputComponent";
import CopyInput from "components/Layouts/CopyInput";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";

const Pixel: React.FC = () => {
	const [pixel, setPixel] = useState(0);
	const [rem, setRem] = useState(0);
	const [base, setBase] = useState(16);
	return (
		<Card bordered={false} className={style.pc}>
			<Form layout="vertical">
				<CopyInput>
					<InputComponent
						label="Pixels"
						tooltip="This is a required field"
						value={pixel}
						onChange={(px: number | null) => {
							if (px) {
								setPixel(px);
								setRem(px / base);
							} else {
								setPixel(0);
								setRem(0);
							}
						}}
						precision={2}
						min={0}
						type="number"
					/>
					<Clipboard
						text={`${pixel}`}
						clipboardComponent={ClipboardButton}
					/>
				</CopyInput>

				<CopyInput>
					<InputComponent
						label="REM"
						tooltip="This is a required field"
						value={rem}
						onChange={(rem: number | null) => {
							if (rem) {
								setRem(rem);
								setPixel(rem * base);
							} else {
								setRem(0);
								setPixel(0);
							}
						}}
						precision={2}
						min={0}
						type="number"
					/>
					<Clipboard
						text={`${pixel}`}
						clipboardComponent={ClipboardButton}
					/>
				</CopyInput>

				<CopyInput>
					<InputComponent
						label="Base Font Size"
						tooltip="This is a required field"
						value={base}
						onChange={(base: number | null) => {
							if (base) {
								setBase(base);
								setRem(pixel / base);
							}
						}}
						precision={2}
						min={0}
						type="number"
					/>
				</CopyInput>
			</Form>
		</Card>
	);
};

export default Pixel;
