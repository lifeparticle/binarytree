import { useState } from "react";
import { FormatType } from "./type";
import { Card, Space, Tag } from "antd";
import { formatLabels } from "./constant";
import style from "./ColorPicker.module.scss";
import { ColorPicker as CP } from "@mantine/core";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

const DATA_OPTIONS = formatLabels.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label: label,
}));

const ColorPicker: React.FC = () => {
	const [color, setColor] = useState("rgba(47, 119, 150, 0.7)");
	const [format, setFormat] = useState<FormatType>("hex");

	const renderTags = () => {
		return DATA_OPTIONS.map((option) => (
			<Tag
				onClick={() => setFormat(option.value)}
				color={format === option.value ? "success" : "default"}
				key={option.value}
				style={{ cursor: "pointer" }}
			>
				{option.label}
			</Tag>
		));
	};

	return (
		<div className={style.cp}>
			<Card bordered={false}>
				<Space size="large" direction="vertical" wrap>
					<Space size="small" direction="horizontal" wrap>
						{renderTags()}
					</Space>

					<CP
						format={format}
						value={color}
						onChange={(val: string) => setColor(val)}
						size="xl"
					/>

					<div className={style.cp__result}>
						<div className={style.cp__result__color}>{color}</div>
						<Clipboard
							text={color}
							clipboardComponent={ClipboardButton}
						/>
					</div>
				</Space>
			</Card>
		</div>
	);
};

export default ColorPicker;
