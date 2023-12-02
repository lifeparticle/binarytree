import { Card } from "antd";
import { ResponsiveInputWithLabel } from "components/General";
import { ColorPicker as Cp } from "@mantine/core";
import style from "./ColorPickerWithInput.module.scss";
import { FC } from "react";

interface ColorPickerWithInputProps {
	value: string;
	label: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setColor: (color: string) => void;
}

const ColorPickerWithInput: FC<ColorPickerWithInputProps> = ({
	value,
	setValue,
	setColor,
	label,
}) => {
	return (
		<ResponsiveInputWithLabel
			label={label}
			placeholder="Color"
			value={value}
			onChange={setValue}
			type="text"
			addonBefore={
				<div className={style.cpwi__color}>
					<Card size="small" style={{ background: value }} />
					<div className={style.cpwi__color_dp}>
						<Cp
							format="rgba"
							value={value}
							onChange={setColor}
							size="xl"
						/>
					</div>
				</div>
			}
		/>
	);
};

export default ColorPickerWithInput;
