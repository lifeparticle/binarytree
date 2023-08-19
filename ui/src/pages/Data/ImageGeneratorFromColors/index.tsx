import JSZip from "jszip";
import { Card, Form, Typography } from "antd";
import { saveAs } from "file-saver";
import JSZipUtils from "jszip-utils";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import { Button, Input, Space } from "antd";
import style from "./ImageGeneratorFromColors.module.scss";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { extractColors } from "./utils/helper";
import CopyInput from "components/Layouts/CopyInput";
import InputComponent from "components/General/InputComponent";

const { Title } = Typography;
const { TextArea } = Input;

const ImageGeneratorFromColors: React.FC = () => {
	const [colors, setColors] = useState<Array<string>>([]);
	const [value, setValue] = useState("");
	const domEl = useRef<Array<HTMLDivElement>>([]);
	const [height, setHeight] = useState(200);
	const [width, setWidth] = useState(200);
	const [rounded, setRounded] = useState(20);
	domEl.current = [];

	useCombinedKeyPress(
		() => onTextAreaChange("#FF0000, #00FFFF, #FFFFFF, #C0C0C0, #000000"),
		["ControlLeft", "KeyE"]
	);

	useCombinedKeyPress(() => {
		onTextAreaChange("");
	}, ["ControlLeft", "KeyR"]);

	const onTextAreaChange = (value: string) => {
		setColors(extractColors(value));
		setValue(value);
	};

	const onButtonClick = async () => {
		if (!domEl.current || colors.length === 0) return;

		const zip = new JSZip();

		await Promise.all(
			domEl.current.map(async (el, idx) => {
				const dataUrl = await toPng(el);
				const baseData = await JSZipUtils.getBinaryContent(dataUrl);
				zip.file(`image-${idx + 1}.png`, baseData, { binary: true });
			})
		);

		const content = await zip.generateAsync({ type: "blob" });
		saveAs(content, "ImageGeneratorFromColors.zip");
	};

	return (
		<Form layout="vertical">
			<div className={style.igfc}>
				<Form.Item label="Enter Comma separated pixel value">
					<TextArea
						placeholder="Paste colors separated by commas or new line"
						rows={12}
						onChange={(event) =>
							onTextAreaChange(event.currentTarget.value)
						}
						value={value}
					/>
				</Form.Item>
				<div className={style.igfc__inputs}>
					<CopyInput>
						<InputComponent
							label="Image width"
							placeholder="Image Height"
							value={height}
							onChange={(val) => val && setHeight(val)}
							min={0}
							type="number"
						/>
					</CopyInput>

					<CopyInput>
						<InputComponent
							label="Image Height"
							placeholder="Image Width"
							value={width}
							onChange={(val) => val && setWidth(val)}
							min={0}
							type="number"
						/>
					</CopyInput>

					<CopyInput>
						<InputComponent
							label="Image Border Radius"
							placeholder="Image Border Radius"
							value={rounded}
							onChange={(val) => val && setRounded(val)}
							min={0}
							type="number"
						/>
					</CopyInput>
					<Space>
						<Button onClick={onButtonClick}>Download Zip</Button>
						<Button
							onClick={() => {
								setValue("");
								setColors([]);
							}}
						>
							Clear
						</Button>
					</Space>
				</div>
				{colors.length > 0 && (
					<Card className={style.igfc__colors}>
						{colors.map((color: string, index: number) => {
							return (
								<div
									className={style.colors__color}
									key={color}
								>
									<div
										ref={(ref) => {
											if (ref) {
												domEl.current.push(ref);
											}
										}}
										key={`${index}-${color}`}
										style={{
											backgroundColor: color,
											height: `${height}px`,
											width: `${width}px`,
											borderRadius: `${rounded}px`,
										}}
									/>
									<Title level={5}>{color}</Title>
								</div>
							);
						})}
					</Card>
				)}
			</div>
		</Form>
	);
};

export default ImageGeneratorFromColors;
