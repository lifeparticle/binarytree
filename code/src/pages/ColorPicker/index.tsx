import { useState } from "react";
import { ColorPicker as CP, Text, Stack, Select } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import Button from "components/Button";

const ColorPicker: React.FC = () => {
	const [color, setColor] = useState("rgba(47, 119, 150, 0.7)");
	const [format, setFormat] = useState<
		"hex" | "rgba" | "rgb" | "hsl" | "hsla"
	>("hex");
	const clipboard = useClipboard({ timeout: 500 });

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
			<CP
				format={format}
				value={color}
				onChange={(val) => setColor(val)}
				size="xl"
			/>
			<Text>{color}</Text>
			<Button onClick={() => clipboard.copy(color)}>
				{clipboard.copied ? "Copied" : "Copy"}
			</Button>
		</Stack>
	);
};

export default ColorPicker;
