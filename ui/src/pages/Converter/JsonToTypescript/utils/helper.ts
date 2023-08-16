function isJsonValid(json: string) {
	if (json.length === 0) {
		return "";
	}
	try {
		JSON.parse(json);
		return "valid";
	} catch (error) {
		return "invalid";
	}
}

export { isJsonValid };
