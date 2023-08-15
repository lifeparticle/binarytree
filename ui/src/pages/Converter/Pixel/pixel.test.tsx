import { fireEvent, render, screen } from "@testing-library/react";

import { describe, test } from "vitest";
import Pixel from ".";

describe("Pixel Converter", () => {
	test("render component without crash", () => {
		render(<Pixel />);
	});

	test("render input field", async () => {
		render(<Pixel />);

		const pixelsInput = screen.getByPlaceholderText("Enter pixel value");
		const remInput = screen.getByPlaceholderText("Enter REM value");
		const baseInput = screen.getByPlaceholderText("Enter Unit");

		expect(pixelsInput).toBeInTheDocument();
		expect(remInput).toBeInTheDocument();
		expect(baseInput).toBeInTheDocument();
	});

	test("converts pixel to REM correctly", () => {
		render(<Pixel />);

		const pixelsInput = screen.getByPlaceholderText("Enter pixel value");
		const remInput = screen.getByPlaceholderText("Enter REM value");

		fireEvent.change(pixelsInput, { target: { value: "16" } });

		expect(remInput).toHaveValue("1.00");
	});

	test("converts REM to pixel correctly", () => {
		render(<Pixel />);

		const pixelsInput = screen.getByPlaceholderText("Enter pixel value");
		const remInput = screen.getByPlaceholderText("Enter REM value");

		fireEvent.change(remInput, { target: { value: "1" } });

		expect(pixelsInput).toHaveValue("16.00");
	});
});
