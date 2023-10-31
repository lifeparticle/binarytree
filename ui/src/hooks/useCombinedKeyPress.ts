import { useCallback, useEffect } from "react";
import useUserAgent from "./useUserAgent";

type CallBackFunction = () => void;

function useCombinedKeyPress(
	callback: CallBackFunction,
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

export default useCombinedKeyPress;
