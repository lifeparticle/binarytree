import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColorPicker from "..";

describe("ColorPicker Component", () => {
	test("renders without crashing", () => {
		render(<ColorPicker />);
	});

	test("displays color format options", () => {
		const { getByText } = render(<ColorPicker />);
		// get it from the component
		const formatLabels = ["HEX", "RGBA", "RGB", "HSL", "HSLA"];
		formatLabels.forEach((label) => {
			const tagElement = getByText(label);
			expect(tagElement).toBeInTheDocument();
		});
	});

	test("updates color format on tag click", () => {
		const { getByText } = render(<ColorPicker />);

		// use a loop and check all the tags
		const rgbaTag = getByText("RGBA");
		fireEvent.click(rgbaTag);
		expect(rgbaTag).toHaveClass("ant-tag-success");

		const hexTag = getByText("HEX");
		fireEvent.click(hexTag);
		expect(rgbaTag).not.toHaveClass("ant-tag-success");
		expect(hexTag).toHaveClass("ant-tag-success");
	});
});
