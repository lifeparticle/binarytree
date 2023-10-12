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

export { downloadQRCode };
