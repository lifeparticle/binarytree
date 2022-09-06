import { useState } from "react";
import { ColorPicker as CP, Text, Stack, Select } from "@mantine/core";

const ColorPicker: React.FC = () => {
	const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");
	const [format, setFormat] = useState<"hex" | "rgba" | "rgb" | "hsl" | "hsla">(
		"hex"
	);
	return (
		<Stack align="center">
			<Select
				label="Format"
				value={format}
				data={[
					{ value: "hex", label: "HEX" },
					{ value: "rgba", label: "RGBA" },
					{ value: "rgb", label: "RGB" },
					{ value: "hsl", label: "HSL" },
					{ value: "hsla", label: "HSLA" },
				]}
				onChange={(val: any) => setFormat(val)}
			/>
			<CP format={format} value={value} onChange={onChange} size="xl" />
			<Text>{value}</Text>
		</Stack>
	);
};

export default ColorPicker;
