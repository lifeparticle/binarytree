import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { useCallback, useEffect } from "react";

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
	const doc = new jsPDF();
	doc.text(fileContent, 10, 10);
	doc.save(fileName);
	// const blob = new Blob([fileContent], { type: "application/pdf" });
	// saveAs(blob, fileName);
};

export const downloadTextFile = (fileContent: any, fileName: string) => {
	downloadFile(fileContent, fileName, "text/plain;charset=utf-8");
};

type CallBackFunction = {
	(): void;
};

export function useKeyPress(
	callback: CallBackFunction,
	keyCodes: string[]
): void {
	const handler = useCallback(
		({ code }: KeyboardEvent) => {
			if (keyCodes.includes(code)) {
				callback();
			}
		},
		[callback, keyCodes]
	);

	useEffect(() => {
		window.addEventListener("keydown", handler);
		return () => {
			window.removeEventListener("keydown", handler);
		};
	}, [handler]);
}
