import { useState } from "react";
import { Card, Form, Slider, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import style from "./BoxShadow.module.scss";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import InputGrid from "components/Layouts/InputGrid";

const BoxShadow = () => {
	const [bgColor, setBgColor] = useState("#ffffff0");
	const [shadowColor, setShadowColor] = useState("#ddd");
	const [boxColor, setBoxColor] = useState("#df6a0b77");
	const [horizontalLength, setHorizontalLength] = useState(10);
	const [verticalLength, setVerticalLength] = useState(10);
	const [blurRadius, setBlurRadius] = useState(0);
	const [spreadRadius, setSpreadRadius] = useState(0);

	const boxStyle = {
		width: "300px",
		height: "300px",
		backgroundColor: boxColor,
		margin: "20px auto",
		boxShadow: `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
	};

	const generateCSSCodeString = () => {
		const webkit = `-webkit-box-shadow: ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`;
		const mozila = `-moz-box-shadow: ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`;
		const boxShadow = `box-shadow: ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`;

		return `${webkit}\n${mozila}\n${boxShadow}`;
	};

	return (
		<div className={style.bs}>
			<PageGrid>
				<Card className={style.bs__input}>
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

						<ColorPickerWithInput
							label="Background color"
							value={bgColor}
							setValue={(e) => setBgColor(e.target.value)}
							setColor={setBgColor}
						/>

						<Form.Item label="Horizontal length">
							<Slider
								value={horizontalLength}
								onChange={(value: number) => {
									if (value) {
										setHorizontalLength(value);
									}
								}}
								min={-100}
								max={100}
							/>
						</Form.Item>
						<Form.Item label="Vertical length">
							<Slider
								value={verticalLength}
								onChange={(value) => {
									if (value) {
										setVerticalLength(value);
									}
								}}
								min={-100}
								max={100}
							/>
						</Form.Item>
						<Form.Item label="Blur radius">
							<Slider
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
					</Form>
				</Card>

				<Card
					className={style.bs__output}
					style={{ background: bgColor }}
				>
					<Space direction="vertical">
						<div style={boxStyle}></div>
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

export default BoxShadow;
