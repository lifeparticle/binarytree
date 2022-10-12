import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
// import markdownpdf from "markdown-pdf";
// var markdownpdf = require("markdown-pdf")


export const downloadFile = (
	fileContent: any,
	fileName: string,
	type: string
) => {
	saveAs(
		new File([fileContent], fileName, {
			type: type,
		})
	);
};

export const downloadPDFFile = (fileContent: any, fileName: string) => {
	// const blob = new Blob([fileContent], { type: "application/pdf" });
	// saveAs(blob, fileName);

	// var md = "foo===\n* bar\n* baz\n\nLorem ipsum dolor sit"
	// 	, outputPath = "/path/to/doc.pdf"

	// markdownpdf().from.string(fileContent).to(outputPath, function () {
	// 	console.log("Created", outputPath)
	// })


	const doc = new jsPDF();
	doc.text(fileContent, 10, 10);
	doc.save(fileName);
};

export const downloadTextFile = (fileContent: any, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};

