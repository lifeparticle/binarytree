import { Card, Space } from "antd";
import { EXTENDED_DATA_OPTIONS } from "pages/Colors/ColorPicker/utils/constants";
import DisplayColor from "pages/Colors/ColorPicker/components/DisplayColor";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";
import style from "pages/Colors/ColorPicker/ColorPicker.module.scss";
import {
	determineLabel,
	determineValue,
	generateClipboardText,
} from "pages/Colors/ColorPicker/utils/helper";
import { colors } from "pages/Colors/ColorPicker/utils/types";
import { FC } from "react";

interface DisplayColorsProps {
	colors: colors;
	format: string;
	displayType: "variables" | "colors" | "use-variables";
	title: string;
}

const DisplayColors: FC<DisplayColorsProps> = ({
	colors,
	displayType,
	format,
	title,
}) => {
	return (
		<Card
			bordered={false}
			title={title}
			extra={
				<Clipboard
					text={generateClipboardText(displayType, colors)}
					label="Copy All"
					clipboardComponent={ClipboardButton}
				/>
			}
		>
			<Space direction="vertical" className={style.dp}>
				{EXTENDED_DATA_OPTIONS.map(({ value, label }) => (
					<DisplayColor
						key={value}
						customLabel={determineLabel(value, label, displayType)}
						label={label}
						customValue={determineValue(value, displayType, colors)}
						value={colors[value]}
						format={format}
						title={title}
					/>
				))}
			</Space>
		</Card>
	);
};

export default DisplayColors;
