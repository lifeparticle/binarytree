import { useState } from "react";
import { Card, Form, Slider, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import about from "assets/about.jpg";
import style from "./BorderRadius.module.scss";
import { faker } from "@faker-js/faker";
import {
	ResponsiveSegementWithLabel,
	ResponsiveSelectWithLabel,
} from "components/General/FormComponents";
import { BORDER_STYLES, SEGMENTED_OPTIONS } from "./utils/constants";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import InputGrid from "components/Layouts/InputGrid";

const PARAGRAPHS = faker.lorem.lines(7);
const RADIUS_ROUND = 1e5;

// --radius-blob-1: 30% 70% 70% 30% / 53% 30% 70% 47%;
// --radius-blob-2: 53% 47% 34% 66% / 63% 46% 54% 37%;
// --radius-blob-3: 37% 63% 56% 44% / 49% 56% 44% 51%;
// --radius-blob-4: 63% 37% 37% 63% / 43% 37% 63% 57%;
// --radius-blob-5: 49% 51% 48% 52% / 57% 44% 56% 43%;

const BorderRadius = () => {
	const [border, setBorder] = useState(5);
	const [borderRadiusTopLeft, setBorderRadiusTopLeft] = useState(0);
	const [borderRadiusTopRight, setBorderRadiusTopRight] = useState(0);
	const [borderRadiusBottomLeft, setBorderRadiusBottomLeft] = useState(0);
	const [borderRadiusBottomRight, setBorderRadiusBottomRight] = useState(0);

	const [borderWidth, setBorderWidth] = useState(5);
	const [borderStyle, setBorderStyle] = useState(BORDER_STYLES[4].value);
	const [borderColor, setBorderColor] = useState("rgba(158, 158, 158, 1)");

	const [borderType, setBorderType] = useState("");

	const generateCSSCodeString = () => {
		const borderRadiusString = `border-radius: ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px;`;
		const borderWidthString = `border-width: ${borderWidth}px;`;
		const borderColorString = `border-color: ${borderColor};`;
		const borderStyleString = `border-style: ${borderStyle};`;

		const borderShorthandString = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;

		return `${borderRadiusString}\n${borderWidthString}\n${borderColorString}\n${borderStyleString}\n\n// Shorthand Property\n// top left, top right, bottom right, bottom left\n${borderRadiusString}\n${borderShorthandString}`;
	};

	return (
		<div className={style.br}>
			<PageGrid>
				<Card className={style.br__input}>
					<Form layout="vertical">
						<InputGrid>
							<ColorPickerWithInput
								label="Color"
								value={borderColor}
								setValue={(e) => setBorderColor(e.target.value)}
								setColor={setBorderColor}
							/>

							<ResponsiveSelectWithLabel
								label="Border style"
								value={borderStyle}
								defaultActiveFirstOption
								onSelect={(_, option) =>
									setBorderStyle(option.value)
								}
								options={BORDER_STYLES}
							/>
						</InputGrid>

						<ResponsiveSegementWithLabel
							label="Border type"
							value={borderType}
							onChange={(value: string | number) => {
								setBorderType(value as string);
								if (value === SEGMENTED_OPTIONS[1].value) {
									setBorder(RADIUS_ROUND);
									setBorderRadiusTopLeft(RADIUS_ROUND);
									setBorderRadiusTopRight(RADIUS_ROUND);
									setBorderRadiusBottomLeft(RADIUS_ROUND);
									setBorderRadiusBottomRight(RADIUS_ROUND);
								} else if (
									value === SEGMENTED_OPTIONS[2].value
								) {
									setBorder(0);
									setBorderRadiusTopLeft(0);
									setBorderRadiusTopRight(0);
									setBorderRadiusBottomLeft(0);
									setBorderRadiusBottomRight(0);
								} else {
									setBorder(0);
									setBorderRadiusTopLeft(0);
									setBorderRadiusTopRight(0);
									setBorderRadiusBottomLeft(0);
									setBorderRadiusBottomRight(0);
								}
							}}
							options={SEGMENTED_OPTIONS}
						/>
						<InputGrid>
							<Form.Item label="Border">
								<Slider
									defaultValue={0}
									value={border}
									onChange={(value: number) => {
										if (value) {
											setBorder(value);
											setBorderRadiusTopLeft(value);
											setBorderRadiusTopRight(value);
											setBorderRadiusBottomLeft(value);
											setBorderRadiusBottomRight(value);
										}
									}}
								/>
							</Form.Item>

							<Form.Item label="Border width">
								<Slider
									defaultValue={0}
									value={borderWidth}
									onChange={(value) =>
										value !== null && setBorderWidth(value)
									}
								/>
							</Form.Item>
						</InputGrid>

						<InputGrid>
							<Form.Item label="Top left border">
								<Slider
									defaultValue={0}
									value={borderRadiusTopLeft}
									onChange={(value) =>
										value !== null &&
										setBorderRadiusTopLeft(value)
									}
								/>
							</Form.Item>
							<Form.Item label="Top right border">
								<Slider
									defaultValue={0}
									value={borderRadiusTopRight}
									onChange={(value) =>
										value !== null &&
										setBorderRadiusTopRight(value)
									}
								/>
							</Form.Item>
						</InputGrid>
						<InputGrid>
							<Form.Item label="Bottom left border">
								<Slider
									defaultValue={0}
									value={borderRadiusBottomLeft}
									onChange={(value) =>
										value !== null &&
										setBorderRadiusBottomLeft(value)
									}
								/>
							</Form.Item>
							<Form.Item label="Bottom right border">
								<Slider
									defaultValue={0}
									value={borderRadiusBottomRight}
									onChange={(value) =>
										value !== null &&
										setBorderRadiusBottomRight(value)
									}
								/>
							</Form.Item>
						</InputGrid>
					</Form>
				</Card>

				<Card className={style.br__output}>
					<Space direction="horizontal">
						<img
							src={about}
							onClick={() =>
								window.open(
									"https://unsplash.com/photos/AaqI2ao96KM",
									"_blank"
								)
							}
							style={{
								borderRadius: `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
								borderWidth: `${borderWidth}px`,
								borderColor: `${borderColor}`,
								borderStyle: `${borderStyle}`,
							}}
							className={style.br__output_img}
						/>
						<Card
							className={style.br__output_text}
							style={{
								borderRadius: `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
								borderWidth: `${borderWidth}px`,
								borderColor: `${borderColor}`,
								borderStyle: `${borderStyle}`,
							}}
						>
							{PARAGRAPHS}
						</Card>
					</Space>
				</Card>
			</PageGrid>
			<Card>
				<CodeHighlightWithCopy
					codeString={generateCSSCodeString()}
					language="css"
				/>
			</Card>
		</div>
	);
};

export default BorderRadius;
