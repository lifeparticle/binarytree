import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
	value: () => {
		return {
			matches: false,
			addListener: () => {},
			removeListener: () => {},
		};
	},
});
