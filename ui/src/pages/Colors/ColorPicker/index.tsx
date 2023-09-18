import React, { useState, useMemo, ChangeEvent, useEffect } from "react";
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
	const [searchParams, setSearchParams] = useSearchParams();
	const color = String(searchParams.get("color") || INITIAL_COLOR);

	const [format, setFormat] = useState<FormatType>(
		determineFormat(color) || INITIAL_FORMAT
	);

	const colors = useMemo(() => calculateColors(color), [color]);

	const setColor = (color: string) => {
		searchParams.set("color", color);
		setSearchParams(searchParams);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value.trim();
		searchParams.set("color", input);
		setSearchParams(searchParams);
		setFormat(determineFormat(input));
	};

	useEffect(() => {
		if (!searchParams.get("color")) {
			searchParams.set("color", INITIAL_COLOR);
			setSearchParams(searchParams);
		}
	}, []);

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
								onSelect={setFormat}
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
