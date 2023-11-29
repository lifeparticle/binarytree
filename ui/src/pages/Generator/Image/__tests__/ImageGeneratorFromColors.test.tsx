import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import ImageGeneratorFromColors from "pages/Generator/Image";

describe("Image Generator component", () => {
	test("render a component without crash", () => {
		render(<ImageGeneratorFromColors />);
	});

	test("render buttons correctly", () => {
		render(<ImageGeneratorFromColors />);

		const downloadZipButtonElement = screen.getByRole("button", {
			name: /download zip/i,
		});

		expect(downloadZipButtonElement).toBeInTheDocument();
	});

	test("change textarea value and clear", async () => {
		render(<ImageGeneratorFromColors />);
		const COLOR = "#FFFFFF";

		const textareaElement = screen.getByRole("textbox");

		expect(textareaElement).toBeInTheDocument();

		fireEvent.change(textareaElement, { target: { value: COLOR } });

		expect(textareaElement).toHaveValue(COLOR);
	});
});
