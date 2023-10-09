import JSZip from "jszip";
import { Card, Form, Input, Space, Tag } from "antd";
import { saveAs } from "file-saver";
import JSZipUtils from "jszip-utils";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import style from "./ImageGeneratorFromColors.module.scss";
import useCombinedKeyPress from "hooks/useCombinedKeyPress";
import { extractColors } from "./utils/helper";
import PageGrid from "components/Layouts/PageGrid";
import {
	ResponsiveButton,
	ResponsiveInputWithLabel,
} from "components/General/FormComponents";
import InputGrid from "components/Layouts/InputGrid";
import Warning from "components/General/Warning";

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
		"KeyE"
	);

	useCombinedKeyPress(() => {
		onTextAreaChange("");
	}, "KeyR");

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
		<Form layout="vertical" className={style.igfc}>
			<PageGrid>
				<Card className={style.igfc__card}>
					<Form.Item label="Input">
						<TextArea
							placeholder={
								"Enter colors separated by space or comma or new line"
							}
							rows={7}
							onChange={(event) =>
								onTextAreaChange(event.currentTarget.value)
							}
							value={value}
							data-gramm={false}
							allowClear
						/>
					</Form.Item>
				</Card>

				<Card className={style.igfc__card}>
					<InputGrid>
						<ResponsiveInputWithLabel
							label="Image height"
							placeholder="Height"
							value={height}
							onChange={(val) => val && setHeight(val)}
							min={0}
							type="number"
						/>

						<ResponsiveInputWithLabel
							label="Image width"
							placeholder="Width"
							value={width}
							onChange={(val) => val && setWidth(val)}
							min={0}
							type="number"
						/>
					</InputGrid>

					<ResponsiveInputWithLabel
						label="Image border radius"
						placeholder="Border radius"
						value={rounded}
						onChange={(val) => val && setRounded(val)}
						min={0}
						type="number"
					/>

					<Space className={style.igfc__button_container}>
						<ResponsiveButton
							disabled={value.length <= 0}
							onClick={onButtonClick}
						>
							Download Zip
						</ResponsiveButton>
					</Space>
				</Card>
			</PageGrid>

			<Card className={style.igfc__colors}>
				{colors.length > 0 ? (
					<div className={style.igfc__images}>
						{colors.map((color: string) => {
							return (
								<Space
									key={color}
									className={style.igfc__images_image}
								>
									<div
										ref={(ref) => {
											if (ref) {
												domEl.current.push(ref);
											}
										}}
										style={{
											backgroundColor: color,
											height: `${height}px`,
											width: `${width}px`,
											borderRadius: `${rounded}px`,
										}}
									/>
									<Tag className={style.igfc__image__title}>
										{color}
									</Tag>
								</Space>
							);
						})}
					</div>
				) : (
					<Warning text="There is no data for Iamge, please provide data first." />
				)}
			</Card>
		</Form>
	);
};

export default ImageGeneratorFromColors;
