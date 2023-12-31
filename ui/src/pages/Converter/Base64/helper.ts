function isBase64Valid(input: string) {
	const base64Pattern =
		/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

	if (input.length === 0) return "";
	return base64Pattern.test(input.trim()) ? "valid" : "invalid";
}

export { isBase64Valid };
