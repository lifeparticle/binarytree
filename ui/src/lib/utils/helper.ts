import tinycolor from "tinycolor2";

function setLocalstorageValue<T>(key: string, value: T): void {
	try {
		const serializedValue = JSON.stringify(value);
		localStorage.setItem(key, serializedValue);
	} catch (error) {
		// console.error("Error setting localStorage:", error);
	}
}

function getLocalstorageValue<T>(key: string): T | null {
	try {
		const serializedValue = localStorage.getItem(key);

		if (serializedValue === null) {
			return null;
		}

		return JSON.parse(serializedValue);
	} catch (error) {
		return null;
	}
}

const getTextColor = (value: string): string => {
	return tinycolor(value).isDark() ? "white" : "black";
};

const isTransparent = (value: string): boolean => {
	if (tinycolor(value).getAlpha() === 0) {
		return true;
	}
	return false;
};

const classNames = (...args: (string | undefined)[]) => {
	return args.filter(Boolean).join(" ");
};

export {
	setLocalstorageValue,
	getLocalstorageValue,
	classNames,
	getTextColor,
	isTransparent,
};
