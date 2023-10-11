import { useState } from "react";
import { Card, Form, Slider } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import style from "./BorderRadius.module.scss";
import {
	ResponsiveInputWithLabel,
	ResponsiveSegementWithLabel,
	ResponsiveSelectWithLabel,
} from "components/General/FormComponents";
import {
	BLOB_SHAPE,
	BORDER_RADIUS,
	BORDER_STYLES,
	INIT_BORDER,
	INIT_BORDER_WIDTH,
	INIT_COLOR,
	PARAGRAPHS,
	RADIUS_ROUND,
	SEGMENTED_OPTIONS,
} from "./utils/constants";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import InputGrid from "components/Layouts/InputGrid";

const BorderRadius = () => {
	const [border, setBorder] = useState(INIT_BORDER);
	const [borderWidth, setBorderWidth] = useState(INIT_BORDER_WIDTH);
	const [borderStyle, setBorderStyle] = useState(BORDER_STYLES[4].value);
	const [borderColor, setBorderColor] = useState(INIT_COLOR);
	const [borderType, setBorderType] = useState(BORDER_RADIUS.rounded);

	const updateBorderByIndex = (value: string, index: number) => {
		if (index === -1) {
			setBorder(value);
			return;
		}
		const values = border.split(" ");
		values[index] = value;
		setBorder(values.join(" "));
	};

	const getBorderRadiusString = (border: string) => {
		if (border.includes("%")) {
			return border;
		}

		const [topLeft, topRight, bottomRight, bottomLeft] = border.split(" ");

		if (
			topLeft === topRight &&
			topLeft === bottomRight &&
			topLeft === bottomLeft
		) {
			return `${topLeft}px`;
		}

		return `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
	};

	const generateCSSCodeString = () => {
		const borderRadiusString = `border-radius: ${getBorderRadiusString(
			border
		)};`;
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
								if (value === BORDER_RADIUS.circle) {
									setBorder(
										`${RADIUS_ROUND} ${RADIUS_ROUND} ${RADIUS_ROUND} ${RADIUS_ROUND}`
									);
								} else if (value === BORDER_RADIUS.blob) {
									setBorder(BLOB_SHAPE);
								} else {
									setBorder("0 0 0 0");
								}
							}}
							options={SEGMENTED_OPTIONS}
						/>

						{borderType === BORDER_RADIUS.blob && (
							<ResponsiveInputWithLabel
								label="Blob shape"
								value={border}
								onChange={(e) => {
									updateBorderByIndex(e.target.value, -1);
								}}
								type="text"
							/>
						)}

						<InputGrid>
							<Form.Item label="Border">
								<Slider
									disabled={
										borderType === BORDER_RADIUS.circle ||
										borderType === BORDER_RADIUS.blob
									}
									onChange={(value: number) => {
										if (value) {
											setBorder(
												`${value} ${value} ${value} ${value}`
											);
										}
									}}
								/>
							</Form.Item>

							<Form.Item label="Border width">
								<Slider
									defaultValue={0}
									value={parseInt(borderWidth, 10)}
									onChange={(value) =>
										value !== null &&
										setBorderWidth(String(value))
									}
								/>
							</Form.Item>
						</InputGrid>

						<InputGrid>
							<Form.Item label="Top left border">
								<Slider
									disabled={
										borderType === BORDER_RADIUS.circle ||
										borderType === BORDER_RADIUS.blob
									}
									onChange={(value) => {
										if (value !== null) {
											updateBorderByIndex(
												String(value),
												0
											);
										}
									}}
								/>
							</Form.Item>
							<Form.Item label="Top right border">
								<Slider
									disabled={
										borderType === BORDER_RADIUS.circle ||
										borderType === BORDER_RADIUS.blob
									}
									onChange={(value) => {
										if (value !== null) {
											updateBorderByIndex(
												String(value),
												1
											);
										}
									}}
								/>
							</Form.Item>
						</InputGrid>
						<InputGrid>
							<Form.Item label="Bottom left border">
								<Slider
									disabled={
										borderType === BORDER_RADIUS.circle ||
										borderType === BORDER_RADIUS.blob
									}
									onChange={(value) => {
										if (value !== null) {
											updateBorderByIndex(
												String(value),
												3
											);
										}
									}}
								/>
							</Form.Item>
							<Form.Item label="Bottom right border">
								<Slider
									disabled={
										borderType === BORDER_RADIUS.circle ||
										borderType === BORDER_RADIUS.blob
									}
									onChange={(value) => {
										if (value !== null) {
											updateBorderByIndex(
												String(value),
												2
											);
										}
									}}
								/>
							</Form.Item>
						</InputGrid>
					</Form>
				</Card>

				<Card className={style.br__output}>
					<div className={style.br__output_container}>
						<Card
							className={style.br__output_container_text}
							style={{
								borderRadius: getBorderRadiusString(border),
								borderWidth: `${borderWidth}px`,
								borderColor: `${borderColor}`,
								borderStyle: `${borderStyle}`,
							}}
						>
							{PARAGRAPHS}
						</Card>
					</div>
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
