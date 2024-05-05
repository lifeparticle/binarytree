import JSZipUtils from "jszip-utils";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { toJpeg, toPng } from "html-to-image";

const downloadQRCode = (
	ext: string,
	domEl: Array<HTMLDivElement>,
	value: string,
	multiLine: boolean
) => {
	if (multiLine) {
		downloadQRCodes(domEl, value.split("\n"), ext);
		return;
	}

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

const downloadQRCodes = async (
	domEl: Array<HTMLDivElement>,
	value: string[],
	ext: string
) => {
	if (!domEl || value.length === 0) return;

	const zip = new JSZip();

	console.log(domEl);
	console.log(value);

	await Promise.all(
		domEl.map(async (el, idx) => {
			const dataUrl = ext === ".png" ? await toPng(el) : await toJpeg(el);
			const baseData = await JSZipUtils.getBinaryContent(dataUrl);
			zip.file(`image-${value[idx]}.${ext}`, baseData, { binary: true });
		})
	);

	const content = await zip.generateAsync({ type: "blob" });
	saveAs(content, "QRCodes.zip");
};

export { downloadQRCode };
