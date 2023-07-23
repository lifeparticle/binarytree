import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const downloadFile = (fileContent: string, fileName: string, type: string) => {
	saveAs(
		new File([fileContent], fileName, {
			type: type,
		})
	);
};

const downloadPDFFile = (fileContent: string, fileName: string) => {
	const doc = new jsPDF();
	doc.text(fileContent, 10, 10);
	doc.save(fileName);
	// const blob = new Blob([fileContent], { type: "application/pdf" });
	// saveAs(blob, fileName);
};

const downloadTextFile = (fileContent: string, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};

export { downloadFile, downloadPDFFile, downloadTextFile };
