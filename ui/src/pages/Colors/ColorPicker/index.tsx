import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";
import style from "./ColorPicker.module.scss";
import { Card, Form, Space } from "antd";
import { ColorPicker as CP } from "@mantine/core";
import { INITIAL_COLOR, INITIAL_FORMAT } from "./utils/constant";
import ColorFormatTags from "./components/ColorFormatTags";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import DisplayColors from "./components/DisplayColors";
import { FormatType } from "./utils/types";
import { determineFormat } from "./utils/helper";
import CopyInput from "components/Layouts/CopyInput";
import InputComponent from "components/General/InputComponent";

const ColorPicker: React.FC = () => {
	const [color, setColor] = useState(INITIAL_COLOR);
	const [format, setFormat] = useState<FormatType>(INITIAL_FORMAT);
	const [colors, setColors] = useState({
		hex: "",
		hex8: "",
		rgb: "",
		rgba: "",
		hsl: "",
		hsla: "",
	});

	useEffect(() => {
		const tc = tinycolor(color);
		const { r, g, b, a } = tc.toRgb();
		const hsl = tc.toHsl();
		const alpha = tc.getAlpha();

		setColors({
			hex: tc.toHexString(),
			hex8: tc.toHex8String(),
			rgb: tc.toRgbString(),
			rgba: `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(
				b
			)}, ${a})`,
			hsl: tc.toHslString(),
			hsla: `hsla(${Math.round(hsl.h)}, ${Math.round(
				hsl.s * 100
			)}%, ${Math.round(hsl.l * 100)}%, ${alpha})`,
		});
	}, [color]);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value.trim();
		setFormat(determineFormat(input));
		setColor(input);
	};

	return (
		<Form layout="vertical">
			<div className={style.cp}>
				<Card bordered={false}>
					<Space size="large" direction="vertical" wrap>
						<CopyInput>
							<InputComponent
								label="Color Code"
								value={color}
								onChange={onInputChange}
								type="text"
							/>
							<Clipboard
								text={color}
								clipboardComponent={ClipboardButton}
							/>
						</CopyInput>

						<Space size="small" direction="horizontal" wrap>
							<ColorFormatTags
								currentFormat={format}
								onSelect={setFormat}
							/>
						</Space>
						<CP
							format={format}
							value={color}
							onChange={setColor}
							size="xl"
						/>
					</Space>
				</Card>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="colors"
					title="Colors"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="variables"
					title="CSS variables"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="use-variables"
					title="Use CSS variables"
				/>
			</div>
		</Form>
	);
};

export default ColorPicker;
