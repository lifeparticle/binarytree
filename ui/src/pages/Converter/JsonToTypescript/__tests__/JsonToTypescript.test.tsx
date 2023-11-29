import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import JsonToTypescript from "pages/Converter/JsonToTypescript/JsonToTypescript";

describe("JsonToTs", () => {
	test("render component without crash", () => {
		render(<JsonToTypescript key={101} />);
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
