import { useCallback, useEffect, useRef } from "react";

type CallBackFunction = {
	(): void;
};

function useCombinedKeyPress(
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

export { useCombinedKeyPress };
