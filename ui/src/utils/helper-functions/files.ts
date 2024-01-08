import { saveAs } from "file-saver";
import { marked } from "marked";
import FileConverter from "pages/Converter/File";
import { fetchFile } from "@ffmpeg/util";
import { FFmpeg } from "@ffmpeg/ffmpeg";

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
	const content = await marked(fileContent, { renderer });

	const a = document.createElement("a");
	a.href = "data:text/html;charset=utf-8," + encodeURIComponent(content);
	a.download = fileName;

	document.body.appendChild(a);
	a.click();
}

export function downloadTextFile(fileContent: string, fileName: string) {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
}

export function downloadJSONFile(fileContent: string, fileName: string) {
	downloadFile(fileContent, fileName, "application/json;charset=utf-8");
}

const transcode = async (
	fileConverter: FileConverter,
	selectedFormat: string,
	ffmpeg: FFmpeg
) => {
	const outputFileName = `${removeFileExtension(
		fileConverter.file.name
	)}${selectedFormat}`;

	await ffmpeg.writeFile(
		fileConverter.file.name,
		await fetchFile(fileConverter.file.originFileObj)
	);
	await ffmpeg.exec(["-i", fileConverter.file.name, outputFileName]);
	const fileData = await ffmpeg.readFile(outputFileName);
	const data = new Uint8Array(fileData as ArrayBuffer);

	const blob = new Blob([data.buffer], {
		type: `${fileConverter.file.type}/${selectedFormat}`,
	});
	const url = URL.createObjectURL(blob);
	return [url, outputFileName];
};

const downloadFiles = async (url: string, fileName: string) => {
	const a = document.createElement("a");
	a.download = fileName;
	a.href = url;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

export const convertFiles = async (
	uploadedFiles: FileConverter[],
	selectedFormat: string,
	ffmpeg: FFmpeg
) => {
	const convertedFilesPromises = uploadedFiles.map((fileConverter) =>
		transcode(fileConverter, selectedFormat, ffmpeg)
	);
	const convertedFiles = await Promise.all(convertedFilesPromises);

	for (const [url, fileName] of convertedFiles) {
		await downloadFiles(url, fileName);
	}
};

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
