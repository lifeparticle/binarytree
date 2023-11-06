import { useCallback, useEffect } from "react";

type CallbackFunction = () => void;

function useKeyPress(callback: CallbackFunction, targetKey: string): void {
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === targetKey) {
				callback();
			}
		},
		[targetKey, callback]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
}

export default useKeyPress;
