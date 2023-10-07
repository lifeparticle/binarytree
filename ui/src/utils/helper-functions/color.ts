import tinycolor from "tinycolor2";

const getTextColor = (value: string): string => {
	return tinycolor(value).isDark() ? "white" : "black";
};

const isTransparent = (value: string): boolean => {
	if (tinycolor(value).getAlpha() < 1) {
		return true;
	}
	return false;
};

export { getTextColor, isTransparent };
