import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import Footer from "components/Layouts/Footer";

describe("Footer", () => {
	test("render component without crash", () => {
		render(<Footer isDarkMode={false} handleThemeChange={vi.fn} />);

		const imageElement = screen.getByRole("img");

		expect(imageElement).toBeInTheDocument();
	});
});
