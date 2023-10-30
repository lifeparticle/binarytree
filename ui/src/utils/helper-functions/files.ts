import { saveAs } from "file-saver";
import { marked } from "marked";
import { ChangeEvent } from "react";

const downloadFile = (fileContent: string, fileName: string, type: string) => {
	saveAs(
		new File([fileContent], fileName, {
			type: type,
		})
	);
};

const downloadPDFFile = async (fileContent: string, fileName: string) => {
	const renderer = new marked.Renderer();
	const content = marked(fileContent, { renderer });

	const a = document.createElement("a");
	a.href = "data:text/html;charset=utf-8," + encodeURIComponent(content);
	a.download = fileName;

	document.body.appendChild(a);
	a.click();
};

const downloadTextFile = (fileContent: string, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};

type ImageCallback = (dataUrl: string) => void;

const handleImageUpload = (
	e: ChangeEvent<HTMLInputElement>,
	callback: ImageCallback
) => {
	if (e.target.files && e.target.files.length > 0) {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			if (typeof reader.result === "string") {
				callback(reader.result);
			}
		};

		reader.readAsDataURL(file);
	}
};

const getFileExtension = (fileName: string) => {
	const ext = fileName.split(".").pop();
	if (ext) {
		return ext;
	}
	return "";
};

const removeExtension = (fileName: string) => {
	const ext = getFileExtension(fileName);
	if (ext) {
		return fileName.replace(`.${ext}`, "");
	}
	return fileName;
};

export {
	downloadFile,
	downloadPDFFile,
	downloadTextFile,
	handleImageUpload,
	getFileExtension,
	removeExtension,
};
