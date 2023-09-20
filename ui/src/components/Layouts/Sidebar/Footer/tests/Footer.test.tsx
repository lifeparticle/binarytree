import { render, screen } from "@testing-library/react";
import { afterAll, describe, vi } from "vitest";
import Footer from "components/Layouts/Sidebar/Footer";

// Mock the window.innerWidth to simulate different screen sizes
const originalInnerWidth = window.innerWidth;
Object.defineProperty(window, "innerWidth", {
	writable: true,
	value: 767,
});

afterAll(() => {
	Object.defineProperty(window, "innerWidth", {
		writable: true,
		value: originalInnerWidth,
	});
});

describe("Footer", () => {
	test("render component without crash", () => {
		render(
			<Footer
				collapsed={false}
				isDarkMode={false}
				handleThemeChange={vi.fn}
				handleMenuCollapse={vi.fn}
			/>
		);

		const imageElement = screen.getByRole("img");

		expect(imageElement).toBeInTheDocument();
	});

	test("sidebar collapse menu is hidden when window is less than 768px", () => {
		screen.debug();
		const button = screen.queryByRole("button");

		expect(button).not.toBeInTheDocument();
	});
});
