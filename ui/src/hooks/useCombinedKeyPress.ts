import { useCallback, useEffect, useRef, useState } from "react";
// import useUserAgent from "./useUserAgent";

type CallBackFunction = () => void;

// mapping
// const keyCodes = { ctrl: "Control", cmd: "Shift" };

function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCode: string
): void {
	const isControlOrCommandKey = useRef(false);
	const isKeyPressed = useRef(false);
	// const platform = useUserAgent();
	const [pressedKeys, setPressedKeys] = useState<string[]>([]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;

			if (!pressedKeys.includes(event.key)) {
				setPressedKeys((prev) => [...prev, event.key]);
			}

			console.log("handleKeyDown", event.key);
			return;
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
		[callback, keyCode, pressedKeys]
	);

	useEffect(() => {
		console.log("pressedKeys", pressedKeys);
	}, [pressedKeys]);

	const handleKeyUp = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;

			const filteredKeys = pressedKeys.filter((key) => key !== event.key);

			setPressedKeys(filteredKeys);

			console.log("handleKeyUp", event.key);

			return;
			if (event.key === "Control" || event.key === "Meta") {
				isControlOrCommandKey.current = false;
			}

			if (keyCode === code) {
				isKeyPressed.current = false;
			}
		},
		[keyCode, pressedKeys]
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
