import { saveAs } from "file-saver";
import { marked } from "marked";

export function downloadFile(
	fileContent: string,
	fileName: string,
	type: string
) {
	saveAs(
		new File([fileContent], fileName, {
			type: type,
		})
	);
}

export async function downloadPDFFile(fileContent: string, fileName: string) {
	const renderer = new marked.Renderer();
	const content = marked(fileContent, { renderer });

	const a = document.createElement("a");
	a.href = "data:text/html;charset=utf-8," + encodeURIComponent(content);
	a.download = fileName;

	document.body.appendChild(a);
	a.click();
}

export function downloadTextFile(fileContent: string, fileName: string) {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
}

export function handleImageUpload(
	file: File,
	callback: (base64: string) => void
): void {
	const reader = new FileReader();
	reader.onload = (e) => {
		const imageSrc = e.target?.result;
		if (typeof imageSrc === "string") {
			callback(imageSrc);
		}
	};
	reader.readAsDataURL(file);
}

export function getFileExtension(fileName: string) {
	const ext = fileName.split(".").pop();
	if (ext) {
		return ext;
	}
	return "";
}

export const removeFileExtension = (fileName: string) => {
	const ext = getFileExtension(fileName);
	if (ext) {
		return fileName.replace(`.${ext}`, "");
	}
	return fileName;
};
