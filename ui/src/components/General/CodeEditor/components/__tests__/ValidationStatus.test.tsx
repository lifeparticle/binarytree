import { render } from "@testing-library/react";
import { describe } from "vitest";
import ValidateStatus from "components/General/CodeEditor/components/ValidateStatus";

describe("BASE64", () => {
	test("render component without crash", () => {
		render(<ValidateStatus status="" />);
	});

	test("should not render Space when status is empty", () => {
		const { container } = render(<ValidateStatus status="" />);
		const spaceElement = container.querySelector('[role="validation"]');
		expect(spaceElement).toBeNull();
	});

	test("should render Space when status has a value", () => {
		const { container } = render(<ValidateStatus status="valid" />);
		const spaceElement = container.querySelector('[role="validation"]');
		expect(spaceElement).toBeInTheDocument();
	});
});
