import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import user from "@testing-library/user-event";
import ImageGeneratorFromColors from ".";

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

		const clearButtonElement = screen.getByRole("button", {
			name: /clear/i,
		});

		expect(clearButtonElement).toBeInTheDocument();
	});

	test("clear value after press clear button", async () => {
		render(<ImageGeneratorFromColors />);

		const textareaElement = screen.getByRole("textbox");

		const clearButtonElement = screen.getByRole("button", {
			name: /clear/i,
		});

		await user.click(clearButtonElement);
		expect(textareaElement).toHaveTextContent("");
	});
});
