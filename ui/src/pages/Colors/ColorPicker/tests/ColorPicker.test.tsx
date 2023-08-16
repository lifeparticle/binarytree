import { test, expect, describe } from "vitest";
import ColorPicker from "..";
import { formatLabels } from "../utils/constant";
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
