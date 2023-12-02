import tinycolor from "tinycolor2";

export const getTextColor = (value: string): string => {
	return tinycolor(value).isDark() ? "white" : "black";
};

export const isTransparent = (value: string): boolean => {
	if (tinycolor(value).getAlpha() < 1) {
		return true;
	}
	return false;
};
