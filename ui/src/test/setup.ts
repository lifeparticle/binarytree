import "@testing-library/jest-dom";
import { server } from "mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";

Object.defineProperty(window, "matchMedia", {
	value: () => {
		return {
			matches: false,
			addListener: () => {},
			removeListener: () => {},
		};
	},
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
