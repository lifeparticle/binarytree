import { useCallback, useEffect, useRef } from "react";

type CallBackFunction = () => void;

function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCode: string
): void {
	const isControlOrCommandKey = useRef(false);
	const isKeyPressed = useRef(false);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;
			if (event.key === "Control" || event.key === "Meta") {
				isControlOrCommandKey.current = true;
			}

			if (isControlOrCommandKey.current && keyCode === code) {
				event.preventDefault();
				isKeyPressed.current = true;
			}

			if (isControlOrCommandKey.current && isKeyPressed.current) {
				callback();
			}
		},
		[callback, keyCode]
	);

	const handleKeyUp = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;
			if (event.key === "Control" || event.key === "Meta") {
				isControlOrCommandKey.current = false;
			}

			if (keyCode === code) {
				isKeyPressed.current = false;
			}
		},
		[keyCode]
	);

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
