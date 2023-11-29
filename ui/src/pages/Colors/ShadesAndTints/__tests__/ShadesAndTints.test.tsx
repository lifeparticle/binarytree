import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Shades from "pages/Colors/ShadesAndTints/ShadesAndTints";
import { MemoryRouter } from "react-router-dom";

describe("Shade", () => {
	test("renders the component correctly", () => {
		render(
			<MemoryRouter>
				<Shades />
			</MemoryRouter>
		);
	});

	test("buttons", () => {
		render(
			<MemoryRouter>
				<Shades />
			</MemoryRouter>
		);

		const clearButton = screen.queryByRole("button", {
			name: /clear/i,
		});

		expect(clearButton).not.toBeInTheDocument();
	});
});
