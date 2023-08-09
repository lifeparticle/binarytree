import { saveAs } from "file-saver";
import markdownIt from "markdown-it";
import jsPDF from "jspdf";

const downloadFile = (fileContent: string, fileName: string, type: string) => {
	saveAs(
		new File([fileContent], fileName, {
			type: type,
		})
	);
};

const downloadPDFFile = async (fileContent: string, fileName: string) => {
	// Convert Markdown to HTML using marked
	const md = new markdownIt();
	const convertHtml = md.render(fileContent);

	const doc = new jsPDF({
		unit: "mm",
		format: "a4",
		orientation: "portrait",
	});

	doc.html(convertHtml, {
		async callback(doc) {
			await doc.save(fileName);
		},
		x: 15,
		y: 15,
	});
};

const downloadTextFile = (fileContent: string, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};

export { downloadFile, downloadPDFFile, downloadTextFile };
