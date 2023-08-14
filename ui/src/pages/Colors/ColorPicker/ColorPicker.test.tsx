import { test, expect } from "vitest";
import ColorPicker from "./ColorPicker";
import { formatLabels } from "./constant";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";

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
