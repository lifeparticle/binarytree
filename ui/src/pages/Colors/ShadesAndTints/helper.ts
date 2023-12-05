import Values from "values.js";
import { SelectOption } from "./types";

export const formatShades = (shades: string[], option: SelectOption) => {
	if (option.func) {
		return option.func(shades);
	}

	return shades.join(option.value);
};

export const generateShadesForColor = (
	selectedColor: string,
	count: number
): { shades: string[]; tints: string[] } => {
	try {
		if (!selectedColor || !count || count <= 0)
			return { shades: [], tints: [] };

		const values = new Values(selectedColor);
		const shadesArray = values.shades(count);
		const tintsArray = values.tints(count);

		const shades = shadesArray.map((shade) => "#" + shade.hex);
		const tints = tintsArray.map((tint) => "#" + tint.hex);

		return { shades, tints };
	} catch (err) {
		return { shades: [], tints: [] };
	}
};

export const generateRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};
