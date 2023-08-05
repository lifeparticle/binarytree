import { test, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColorPicker, { formatLabels } from ".";

describe("ColorPicker Component", () => {
	test("renders without crashing", () => {
		render(<ColorPicker />);
	});

	test("displays color format options", () => {
		render(<ColorPicker />);

		formatLabels.forEach((label) => {
			const tagElement = screen.getByText(label);
			expect(tagElement).toBeInTheDocument();
			fireEvent.click(tagElement);
			expect(tagElement).toHaveClass("ant-tag-success");
		});
	});
});
