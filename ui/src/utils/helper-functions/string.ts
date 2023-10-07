const classNames = (...args: (string | undefined)[]) => {
	return args.filter(Boolean).join(" ");
};

const openLink = (url: string, newTab: boolean = true) => {
	window.open(url, newTab ? "_blank" : "_self", "noopener");
};

export { classNames, openLink };
