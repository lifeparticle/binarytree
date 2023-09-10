import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import user from "@testing-library/user-event";
import Base64 from "pages/Converter/Base64";

describe("BASE64", () => {
	test("render component without crash", () => {
		render(<Base64 />);
	});

	test("textbox", async () => {
		render(<Base64 />);

		const TEXT = "hello";

		const textInputArea = screen.getByPlaceholderText("Input");
		expect(textInputArea).toBeInTheDocument();

		await user.type(textInputArea, TEXT);

		expect(textInputArea).toHaveValue(TEXT);
	});
});
