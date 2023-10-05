import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import JsonToTypescript from "pages/Converter/JsonToTypescript";

describe("JsonToTs", () => {
	test("render component without crash", () => {
		render(<JsonToTypescript key={101} />);
	});

	test("render json textfield", () => {
		render(<JsonToTypescript key={101} />);

		const rootInterfacenameInput = screen.getByPlaceholderText(
			"Enter Interface name"
		);
		expect(rootInterfacenameInput).toBeInTheDocument();
	});

	test("show initial warning text", () => {
		render(<JsonToTypescript key={101} />);

		const warningText = screen.getByText(
			/There is no data for JSON, please provide data first./i
		);

		const convertButton = screen.getByText("Convert");
		fireEvent.click(convertButton);

		expect(warningText).toBeInTheDocument();
		expect(convertButton).toBeInTheDocument();
	});
});
