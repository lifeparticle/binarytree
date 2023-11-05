import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import QRcode from "..";

describe("QRCODE", () => {
	test("render component without crash", () => {
		render(<QRcode />);
	});

	test("textarea input providation", () => {
		render(<QRcode />);

		const textarea = screen.getByPlaceholderText("Enter input");

		fireEvent.change(textarea, { target: { value: "Test text" } });

		expect(textarea).toHaveValue("Test text");
	});
});
