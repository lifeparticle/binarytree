import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import user from "@testing-library/user-event";
import Base64 from ".";

describe("BASE64", () => {
	test("render component without crash", () => {
		render(<Base64 />);
	});

	test("buttons", () => {
		render(<Base64 />);

		const textToBase64ButtonElement = screen.getByRole("button", {
			name: /text to base64/i,
		});
		expect(textToBase64ButtonElement).toBeInTheDocument();

		const textClearButtonElement = screen.getByRole("clear_text");
		expect(textClearButtonElement).toBeInTheDocument();

		const base64ToTextButtonElement = screen.getByRole("button", {
			name: /base64 to text/i,
		});
		expect(base64ToTextButtonElement).toBeInTheDocument();

		const base64ClearButtonElement = screen.getByRole("clear_base64");
		expect(base64ClearButtonElement).toBeInTheDocument();
	});

	test("textbox", async () => {
		render(<Base64 />);

		const TEXT = "hello";

		const textInputArea = screen.getByPlaceholderText("Input");
		expect(textInputArea).toBeInTheDocument();

		await user.type(textInputArea, TEXT);

		expect(textInputArea).toHaveValue(TEXT);

		const textClearButtonElement = screen.getByRole("clear_text");
		await user.click(textClearButtonElement);

		expect(textInputArea).toHaveValue("");
	});
});
