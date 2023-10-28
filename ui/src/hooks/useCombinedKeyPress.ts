import { useCallback, useEffect, useState } from "react";

type CallBackFunction = () => void;

function useCombinedKeyPress(
	callback: CallBackFunction,
	keyCodes: string[]
): void {
	const [pressedKeys, setPressedKeys] = useState<string[]>([]);

	useEffect(() => {
		const isMatched = compareArrays(pressedKeys, keyCodes);
		if (isMatched) {
			callback();
			setPressedKeys([]);
		}
	}, [pressedKeys, keyCodes, callback]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			event.preventDefault();
			const key = event.key.toLowerCase();
			if (!pressedKeys.includes(key)) {
				setPressedKeys((prev) => [...prev, key]);
			}
		},
		[pressedKeys]
	);

	const handleKeyUp = useCallback(
		(event: KeyboardEvent) => {
			event.preventDefault();
			const key = event.key.toLowerCase();
			if (pressedKeys.includes(key)) {
				const filteredKeys = pressedKeys.filter((key) => key !== key);
				setPressedKeys(filteredKeys);
			}
		},
		[pressedKeys]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	const compareArrays = (pressedArray: string[], mainArray: string[]) => {
		if (pressedArray?.length !== mainArray?.length) return false;

		for (const iterator of mainArray) {
			const filteredArray = pressedArray.filter((key) =>
				iterator.includes(key)
			);
			if (!(filteredArray?.length > 0)) return false;
		}

		return true;
	};
}

export default useCombinedKeyPress;
