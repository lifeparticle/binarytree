import { useState } from "react";
import { Card, Form, Slider, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import about from "assets/about.jpg";
import style from "./BoxShadow.module.scss";
import { faker } from "@faker-js/faker";
import {
	ResponsiveSegementWithLabel,
	ResponsiveSelectWithLabel,
} from "components/General/FormComponents";
import { BORDER_STYLES, SEGMENTED_OPTIONS } from "./utils/constants";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import InputGrid from "components/Layouts/InputGrid";

const PARAGRAPHS = faker.lorem.paragraph(7);

const BoxShadow = () => {
	const [border, setBorder] = useState(0);
	const [borderRadiusTopLeft, setBorderRadiusTopLeft] = useState(0);
	const [borderRadiusTopRight, setBorderRadiusTopRight] = useState(0);
	const [borderRadiusBottomLeft, setBorderRadiusBottomLeft] = useState(0);
	const [borderRadiusBottomRight, setBorderRadiusBottomRight] = useState(0);

	const [borderWidth, setBorderWidth] = useState(0);
	const [borderStyle, setBorderStyle] = useState(BORDER_STYLES[4].value);
	const [borderColor, setBorderColor] = useState("rgba(0, 0, 0, 1)");

	const [borderType, setBorderType] = useState("rgba(0, 0, 0, 1)");

	const generateCSSCodeString = () => {
		const borderRadiusString = `border-radius: ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px;`;
		const borderWidthString = `border-width: ${borderWidth}px;`;
		const borderColorString = `border-color: ${borderColor};`;
		const borderStyleString = `border-style: ${borderStyle};`;

		const borderShorthandString = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;

		return `${borderRadiusString}\n${borderWidthString}\n${borderColorString}\n${borderStyleString}\n\n// Shorthand Property\n${borderRadiusString}\n${borderShorthandString}`;
	};

	return (
		<PageGrid className={style.br}>
			<Card>
				<Form layout="vertical">
					<InputGrid>
						<ColorPickerWithInput
							label="Color"
							value={borderColor}
							setValue={(e) => setBorderColor(e.target.value)}
							setColor={setBorderColor}
						/>
						<Form.Item label="Border style">
							<ResponsiveSelectWithLabel
								value={borderStyle}
								defaultActiveFirstOption
								onSelect={(_, option) =>
									setBorderStyle(option.value)
								}
								options={BORDER_STYLES}
							/>
						</Form.Item>
					</InputGrid>

					<ResponsiveSegementWithLabel
						label="Radius type"
						value={borderType}
						onChange={(value: string | number) =>
							setBorderType(value as string)
						}
						options={SEGMENTED_OPTIONS}
					/>
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
					<Form.Item label="Top left border">
						<Slider
							defaultValue={0}
							value={borderRadiusTopLeft}
							onChange={(value) =>
								value !== null && setBorderRadiusTopLeft(value)
							}
						/>
					</Form.Item>
					<Form.Item label="Top right border">
						<Slider
							defaultValue={0}
							value={borderRadiusTopRight}
							onChange={(value) =>
								value !== null && setBorderRadiusTopRight(value)
							}
						/>
					</Form.Item>
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
					<Form.Item label="Border width">
						<Slider
							defaultValue={0}
							value={borderWidth}
							onChange={(value) =>
								value !== null && setBorderWidth(value)
							}
						/>
					</Form.Item>
				</Form>
			</Card>

			<Card className={style.br__output}>
				<Space direction="vertical">
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
					<CodeHighlightWithCopy
						codeString={generateCSSCodeString()}
						language="css"
					/>
				</Space>
			</Card>
		</PageGrid>
	);
};

export default BoxShadow;
