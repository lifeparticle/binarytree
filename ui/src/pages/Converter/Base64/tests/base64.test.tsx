import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import Base64 from "pages/Converter/Base64";

describe("BASE64", () => {
	test("render component without crash", () => {
		render(<Base64 />);
	});

	test("textbox", async () => {
		render(<Base64 />);

		const outputLabel = screen.getByText(/base64/i);

		expect(outputLabel).toBeInTheDocument();
	});
});
