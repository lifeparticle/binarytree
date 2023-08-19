import { fireEvent, render, screen } from "@testing-library/react";
import Shades from "..";

describe("Shade", () => {
	test("renders the component correctly.", () => {
		render(<Shades />);

		expect(screen.getByPlaceholderText("Enter Color")).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText("Enter pixel value")
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Clear" })
		).toBeInTheDocument();
	});

	test("buttons", () => {
		render(<Shades />);

		const clearButton = screen.getByRole("button", {
			name: /clear/i,
		});

		expect(clearButton).toBeInTheDocument();
	});

	test("generates shades when color and number of shades are provided", async () => {
		render(<Shades />);

		const colorInput = screen.getByPlaceholderText("Enter Color");
		fireEvent.change(colorInput, { target: { value: "#FF5733" } });

		const numberOfShadesInput =
			screen.getByPlaceholderText("Enter pixel value");
		fireEvent.change(numberOfShadesInput, { target: { value: "5" } });

		const allSorts = screen.queryAllByText(/^#/);

		expect(allSorts.length).toBe(5);
	});
});
