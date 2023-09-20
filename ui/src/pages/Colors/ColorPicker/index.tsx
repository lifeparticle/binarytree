import React, { useMemo, ChangeEvent } from "react";
import style from "./ColorPicker.module.scss";
import { Card, Form, Space } from "antd";
import { ColorPicker as CP } from "@mantine/core";
import { INITIAL_COLOR, INITIAL_FORMAT } from "./utils/constants";
import ColorFormatTags from "./components/ColorFormatTags";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import DisplayColors from "./components/DisplayColors";
import { FormatType } from "./utils/types";
import { calculateColors, determineFormat } from "./utils/helper";
import CopyInput from "components/Layouts/CopyInput";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import { useSearchParams } from "react-router-dom";

const ColorPicker: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		color: INITIAL_COLOR,
		format: INITIAL_FORMAT,
	});

	const color = String(searchParams.get("color"));
	const format = String(searchParams.get("format")) as FormatType;

	console.log(color, format);

	const colors = useMemo(() => calculateColors(color), [color]);
	console.log(colors);

	const setColor = (color: string) => {
		setSearchParams(
			(prev) => {
				prev.set("color", color);
				prev.set("format", determineFormat(color));
				return prev;
			},
			{ replace: true }
		);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value.trim();
		setColor(input);
	};

	return (
		<Form layout="vertical">
			<div className={style.cp}>
				<Card bordered={false}>
					<Space direction="vertical" wrap>
						<CopyInput>
							<ResponsiveInputWithLabel
								label="Color code"
								value={color}
								onChange={onInputChange}
								type="text"
							/>
							<Clipboard
								text={color}
								clipboardComponent={ClipboardButton}
							/>
						</CopyInput>
						<Form.Item label="Color format">
							<ColorFormatTags
								currentFormat={format}
								onSelect={(format) =>
									setSearchParams(
										(prev) => {
											prev.set("format", format);
											return prev;
										},
										{ replace: true }
									)
								}
							/>
						</Form.Item>

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
