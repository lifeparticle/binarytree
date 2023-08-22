import { fireEvent, render, screen } from "@testing-library/react";

import { describe, test } from "vitest";
import Pixel from "pages/Converter/Pixel";

describe("Pixel Converter", () => {
	test("render component without crash.", () => {
		render(<Pixel />);
	});

	test("render input label", async () => {
		render(<Pixel />);

		const pixelsInput = screen.getByText(/pixels/i);
		const remInput = screen.getByText(/rem/i);
		const baseInput = screen.getByText(/base font size/i);

		expect(pixelsInput).toBeInTheDocument();
		expect(remInput).toBeInTheDocument();
		expect(baseInput).toBeInTheDocument();
	});

	test("converts pixel to REM correctly", () => {
		render(<Pixel />);

		const pixelsInput = screen.getByPlaceholderText("Enter pixel value");
		const remInput = screen.getByPlaceholderText("Enter rem value");

		fireEvent.change(pixelsInput, { target: { value: 16 } });

		expect(remInput).toHaveValue(1.0);
	});

	test("converts REM to pixel correctly", () => {
		render(<Pixel />);

		const pixelsInput = screen.getByPlaceholderText("Enter pixel value");
		const remInput = screen.getByPlaceholderText("Enter rem value");

		fireEvent.change(remInput, { target: { value: 1 } });

		expect(pixelsInput).toHaveValue(16.0);
	});
});
