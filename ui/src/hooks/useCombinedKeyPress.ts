import { useCallback, useEffect } from "react";
import useUserAgent from "./useUserAgent";

export default function useCombinedKeyPress(
	callback: () => void,
	targetKey: string
): void {
	const platform = useUserAgent();

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			const key = event.key.toLowerCase();
			const modifierKey =
				platform === "mac" ? event.metaKey : event.ctrlKey;

			if (modifierKey && key === targetKey.toLowerCase()) {
				event.preventDefault();
				event.stopPropagation();
				callback();
			}
		},
		[platform, targetKey, callback]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
}
