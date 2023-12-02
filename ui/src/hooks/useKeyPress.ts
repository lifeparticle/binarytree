import { useCallback, useEffect } from "react";

function useKeyPress(callback: () => void, targetKey: string): void {
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
