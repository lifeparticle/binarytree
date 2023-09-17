function isValidUrl(url: string) {
	const pattern = new RegExp(
		"^(https?:\\/\\/)?" +
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
			"((\\d{1,3}\\.){3}\\d{1,3}))" +
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
			"(\\?[;&a-z\\d%_.~+=-]*)?" +
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return pattern.test(url);
}

const isNumberArray = (data: string[]): boolean => {
	return data.every((value) => /^\d+(\.\d+)?$/.test(value));
};
const isStringArray = (data: string[]): boolean => {
	return data.every((value) => !/^\d+(\.\d+)?$/.test(value));
};

const formatData = (data: string): string[] => {
	const delimitersRegex = /[,\s\n]+/;
	return data.split(delimitersRegex).filter((entry) => entry.length > 0);
};

function detectQrData(data: string) {
	const formattedStringArray = formatData(data);

	if (formattedStringArray.length === 0) {
		return "No data";
	}

	if (isValidUrl(data)) return "Url";

	if (isNumberArray(formattedStringArray)) return "Number";

	if (isStringArray(formattedStringArray)) return "String";

	return "Mixed value";
}

const downloadQRCode = (ext: string) => {
	const canvas = document
		.getElementById("myqrcode")
		?.querySelector<HTMLCanvasElement>("canvas");
	if (canvas) {
		const url = canvas.toDataURL();
		const a = document.createElement("a");
		a.download = `QRcode${ext}`;
		a.href = url;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
};

export { detectQrData, downloadQRCode };
