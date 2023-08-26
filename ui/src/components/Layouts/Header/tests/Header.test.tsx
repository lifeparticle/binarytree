import { render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import Header from "components/Layouts/Header";

describe("Header", () => {
	test("render component without crash", () => {
		// Mock the DarkModeContext value
		const mockContextValue = {
			isDarkMode: true, // Change this value based on your test scenario
		};

		vi.mock("lib/utils/context/DarkModeProvider", () => ({
			DarkModeContext: {
				Consumer: ({
					children,
				}: {
					children: (value: object) => React.ReactNode;
				}) => children(mockContextValue),
			},
		}));
		render(<Header />);
	});
});
