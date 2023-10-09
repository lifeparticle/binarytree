import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import user from "@testing-library/user-event";
import ImageGeneratorFromColors from "pages/Generator/ImageGeneratorFromColors";

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

		await user.type(textareaElement, COLOR);

		expect(textareaElement).toHaveValue(COLOR);
	});
});
