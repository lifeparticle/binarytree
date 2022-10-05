import { saveAs } from "file-saver";

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
	const blob = new Blob([fileContent], { type: "application/pdf" });
	saveAs(blob, fileName);
};

export const downloadTextFile = (fileContent: any, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};
