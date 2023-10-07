import { useState } from "react";
import { Card, Form, Slider, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import style from "./BoxShadow.module.scss";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import InputGrid from "components/Layouts/InputGrid";

const BoxShadow = () => {
	const [shadowColor, setShadowColor] = useState("#ddd");
	const [boxColor, setBoxColor] = useState("#df6a0b77");
	const [horizontalLength, setHorizontalLength] = useState(0);
	const [verticalLength, setVerticalLength] = useState(0);
	const [blurRadius, setBlurRadius] = useState(0);
	const [spreadRadius, setSpreadRadius] = useState(0);
	const [opacity, setOpacity] = useState(0);

	const generateCSSCodeString = () => {
		return "";
	};

	return (
		<PageGrid className={style.br}>
			<Card>
				<Form layout="vertical">
					<InputGrid>
						<ColorPickerWithInput
							label="Shadow color"
							value={shadowColor}
							setValue={(e) => setShadowColor(e.target.value)}
							setColor={setShadowColor}
						/>
						<ColorPickerWithInput
							label="Box color"
							value={boxColor}
							setValue={(e) => setBoxColor(e.target.value)}
							setColor={setBoxColor}
						/>
					</InputGrid>

					<Form.Item label="Horizontal length">
						<Slider
							defaultValue={0}
							value={horizontalLength}
							onChange={(value: number) => {
								if (value) {
									setHorizontalLength(value);
								}
							}}
						/>
					</Form.Item>
					<Form.Item label="Vertical length">
						<Slider
							defaultValue={0}
							value={verticalLength}
							onChange={(value) => {
								if (value) {
									setVerticalLength(value);
								}
							}}
						/>
					</Form.Item>
					<Form.Item label="Blur radius">
						<Slider
							defaultValue={0}
							value={blurRadius}
							onChange={(value) => {
								if (value) {
									setBlurRadius(value);
								}
							}}
						/>
					</Form.Item>
					<Form.Item label="Spread radius">
						<Slider
							defaultValue={0}
							value={spreadRadius}
							onChange={(value) => {
								if (value) {
									setSpreadRadius(value);
								}
							}}
						/>
					</Form.Item>
					<Form.Item label="Opacity">
						<Slider
							defaultValue={0}
							value={opacity}
							onChange={(value) => {
								if (value) {
									setOpacity(value);
								}
							}}
						/>
					</Form.Item>
				</Form>
			</Card>

			<Card className={style.br__output}>
				<Space direction="vertical">
					<div
						style={{
							width: 400,
							height: 300,
							backgroundColor: shadowColor,
							transform: `translate(${horizontalLength}px, ${verticalLength}px)`,
						}}
					>
						<div
							style={{
								width: 400,
								height: 300,
								backgroundColor: boxColor,
								position: "absolute",
							}}
						></div>
					</div>
					<br />
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
