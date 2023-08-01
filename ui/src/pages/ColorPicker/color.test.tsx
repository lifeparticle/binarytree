import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColorPicker from ".";

test("ColorPicker changes format when clicking on format tags", () => {
	render(<ColorPicker />);

	// Click on the "RGB" tag
	const rgbTag = screen.getByText("RGB");
	fireEvent.click(rgbTag);

	// The format should change to "rgb", so the "RGB" tag should have "success" color
	expect(rgbTag).toHaveClass("ant-tag-success");
});
