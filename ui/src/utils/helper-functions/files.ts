import { saveAs } from "file-saver";
import { marked } from "marked";

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

export { downloadFile, downloadPDFFile, downloadTextFile };
