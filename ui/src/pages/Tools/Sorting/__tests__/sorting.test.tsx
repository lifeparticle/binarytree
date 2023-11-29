import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import Sorting from "pages/Tools/Sorting/Sorting";

describe("Sorting", () => {
	test("render sorting component without crash", () => {
		render(<Sorting />);
	});

	test("render buttons & label", () => {
		render(<Sorting />);

		const value = "New input data";

		const inputTextArea = screen.getByPlaceholderText(
			"Enter data separated by space or comma or new line"
		);

		fireEvent.change(inputTextArea, {
			target: { value },
		});

		expect(inputTextArea).toHaveValue(value);
	});
});
