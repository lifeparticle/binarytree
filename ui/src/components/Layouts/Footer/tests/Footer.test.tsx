import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import Footer from "..";

describe("Footer", () => {
	test("render component without crash", () => {
		render(<Footer />);

		const imageElement = screen.getByRole("img");

		expect(imageElement).toBeInTheDocument();
	});
});
