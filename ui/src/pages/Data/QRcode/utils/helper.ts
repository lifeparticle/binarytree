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

function detectQrData(data: string) {
	if (data.length === 0) {
		return "No data";
	}

	if (isValidUrl(data)) return "Url";

	return typeof data;
}

const downloadQRCode = () => {
	const canvas = document
		.getElementById("myqrcode")
		?.querySelector<HTMLCanvasElement>("canvas");
	if (canvas) {
		const url = canvas.toDataURL();
		const a = document.createElement("a");
		a.download = "QRCode.png";
		a.href = url;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
};

export { detectQrData, downloadQRCode };
