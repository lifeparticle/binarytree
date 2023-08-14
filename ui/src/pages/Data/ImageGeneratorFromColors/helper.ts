const extractColors = (value: string) => {
	const temp = value.split(/[\n,]+/).join("");
	const regex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
	return temp.match(regex) || [];
};

export { extractColors };
