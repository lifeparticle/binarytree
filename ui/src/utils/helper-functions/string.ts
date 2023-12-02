export const classNames = (...args: (string | undefined)[]) => {
	return args.filter(Boolean).join(" ");
};
