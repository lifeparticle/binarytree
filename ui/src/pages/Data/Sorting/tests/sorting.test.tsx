import { fireEvent, render, screen } from "@testing-library/react";
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

	test("check input & ouput textbox and copy button", () => {
		render(<Sorting />);

		const INPUT_VALUE = "20 10";
		const OUTPUT_VALUE = "10\n20";

		const inputtextBox = screen.getByPlaceholderText(
			"Enter number or character by space or comma or new Line"
		);

		expect(inputtextBox).toBeInTheDocument();
		const outputTextBox = screen.getByPlaceholderText(/output/i);

		expect(outputTextBox).toBeInTheDocument();

		fireEvent.change(inputtextBox, {
			target: {
				value: INPUT_VALUE,
			},
		});

		expect(inputtextBox).toHaveValue(INPUT_VALUE);
		expect(outputTextBox).toHaveValue(OUTPUT_VALUE);
	});
});
