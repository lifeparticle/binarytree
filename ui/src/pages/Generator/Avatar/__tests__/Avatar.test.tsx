import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import user from "@testing-library/user-event";
import Avatar from "pages/Generator/Avatar";

describe("Avatar component", () => {
	test("render component without crash", () => {
		render(<Avatar />);
	});
	test("text input component and compare with output", async () => {
		render(<Avatar />);
		const inputValue = "SR";
		const textInputElement =
			screen.getByPlaceholderText(/Enter avatar text/);
		expect(textInputElement).toBeInTheDocument();
		await user.clear(textInputElement);
		await user.type(textInputElement, inputValue);
		expect(textInputElement).toHaveValue(inputValue);
		const avatarElement = screen.getByDisplayValue(inputValue);
		expect(avatarElement).toBeInTheDocument();
	});
});
