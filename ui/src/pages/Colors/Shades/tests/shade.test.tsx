import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Shades from "pages/Colors/Shades";

describe("Shade", () => {
	test("renders the component correctly.", () => {
		render(<Shades />);
	});

	test("buttons", () => {
		render(<Shades />);

		const clearButton = screen.getByRole("button", {
			name: /clear/i,
		});

		expect(clearButton).toBeInTheDocument();
	});
});
