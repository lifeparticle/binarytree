import { SelectOption } from "./types";

const formatShades = (shades: string[], option: SelectOption) => {
	if (option.func) {
		return option.func(shades);
	}

	return shades.join(option.value);
};

export { formatShades };
