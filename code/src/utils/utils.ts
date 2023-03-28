import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { useCallback, useEffect, useRef } from "react";

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

export function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCodes: string[]
): void {
	const keysPressed = useRef(new Set<string>());

	const handler = useCallback(
		({ code, type }: KeyboardEvent) => {
			if (type === "keydown") {
				keysPressed.current.add(code);
			} else if (type === "keyup") {
				keysPressed.current.delete(code);
			}

			if (keyCodes.every((keyCode) => keysPressed.current.has(keyCode))) {
				callback();
			}
		},
		[callback, keyCodes]
	);

	useEffect(() => {
		window.addEventListener("keydown", handler);
		window.addEventListener("keyup", handler);
		return () => {
			window.removeEventListener("keydown", handler);
			window.removeEventListener("keyup", handler);
		};
	}, [handler]);
}
