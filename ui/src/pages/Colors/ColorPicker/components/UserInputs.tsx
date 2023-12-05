import { FC } from "react";
import style from "pages/Colors/ColorPicker/ColorPicker.module.scss";
import { Card, Form, Space } from "antd";
import { ColorPicker as Cp } from "@mantine/core";
import { Clipboard } from "components/ComponentInjector";
import { CopyInput } from "components/Layouts";
import { ResponsiveInputWithLabel } from "components/General";
import { PARAMS } from "data/paramsData";
import { ClipboardButton } from "components/InjectedComponent";
import { determineFormat } from "pages/Colors/ColorPicker/helper";
import { FormatType } from "pages/Colors/ColorPicker/types";
import ColorFormatTags from "./ColorFormatTags";

interface UserInputsProps {
	color: string;
	format: FormatType;
	setColorPickerRan: (value: boolean) => void;
	setFormatState: (value: string) => void;
	updateParamsValue: (key: string, value: string) => void;
}

const UserInputs: FC<UserInputsProps> = ({
	color,
	format,
	setColorPickerRan,
	setFormatState,
	updateParamsValue,
}) => {
	return (
		<Card bordered={false} className={style.cp__inputs}>
			<Space direction="vertical" wrap>
				<CopyInput>
					<ResponsiveInputWithLabel
						label="Color code"
						value={color}
						onChange={(e) => {
							updateParamsValue(PARAMS.color, e.target.value);
							setColorPickerRan(true);
							updateParamsValue(
								PARAMS.format,
								determineFormat(e.target.value)
							);
						}}
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
						onSelect={(format) => {
							updateParamsValue(PARAMS.format, format);
						}}
					/>
				</Form.Item>

				<Cp
					format={format}
					value={color}
					onChange={(value) => {
						setFormatState(value);
						setColorPickerRan(false);
					}}
					size="xl"
					aria-label="select a color"
				/>
			</Space>
		</Card>
	);
};

export default UserInputs;
