import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Sorting from "pages/Data/Sorting";

describe("Sorting", () => {
	test("render sorting component without crash", () => {
		render(<Sorting />);
	});

	test("render buttons & label", () => {
		render(<Sorting />);

		const orderByLabel = screen.getByText(/order/i);
		expect(orderByLabel).toBeInTheDocument();

		const clearButton = screen.queryByRole("button", {
			name: /clear/i,
		});

		expect(clearButton).not.toBeInTheDocument();
	});
});
