import { useCallback, useEffect, useState } from "react";
import useUserAgent from "./useUserAgent";

type CallBackFunction = () => void;

// mapping
const keymap = new Map([["Meta", "control"]]);

function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCodes: string[]
): void {
	const platform = useUserAgent();
	const [pressedKeys, setPressedKeys] = useState<string[]>([]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (!pressedKeys.includes(event.key)) {
				const key =
					platform === "win" ? keymap.get(event.key) : event.key;
				setPressedKeys((prev) => [...prev, key || ""]);
			}

			console.log("handleKeyDown", event.key, callback);
		},
		[pressedKeys, platform]
	);

	useEffect(() => {
		console.log("pressedKeys", pressedKeys);
		const identifyKey = () => {
			for (const key of keyCodes) {
				if (!pressedKeys.includes(key)) {
					return false;
				}
			}
			return true;
		};
		const val = identifyKey();
		console.log("val", val);
	}, [pressedKeys, keyCodes]);

	const handleKeyUp = useCallback(
		(event: KeyboardEvent) => {
			const keyUp =
				platform === "win" ? keymap.get(event.key) : event.key;
			console.log("keyUp", keyUp);
			const filteredKeys = pressedKeys.filter((key) => key !== keyUp);

			setPressedKeys(filteredKeys);

			console.log("handleKeyUp", event.key);
		},
		[pressedKeys, platform]
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
