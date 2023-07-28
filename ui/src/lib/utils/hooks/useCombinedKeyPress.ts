import { useCallback, useEffect, useRef } from "react";

type CallBackFunction = () => void;

function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCodes: string[]
): void {
	const keysPressed = useRef<Set<string>>(new Set());

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			const { code, ctrlKey } = event;

			if (ctrlKey && keyCodes.includes(code)) {
				// Prevent the default behavior of Ctrl + specified key combination
				event.preventDefault();
			}

			keysPressed.current.add(code);

			if (keyCodes.every((keyCode) => keysPressed.current.has(keyCode))) {
				callback();
			}
		},
		[callback, keyCodes]
	);

	const handleKeyUp = useCallback((event: KeyboardEvent) => {
		const { code } = event;
		keysPressed.current.delete(code);
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);
}

export default useCombinedKeyPress;
