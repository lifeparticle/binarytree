import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TextEditor from "pages/Text/TextEditor";

describe("TextEditor", () => {
	test("render component without crash", () => {
		render(<TextEditor />);
	});

	test("textarea input", async () => {
		const { container } = render(<TextEditor />);

		const textareaElement = container.querySelector(
			"#quill > div:nth-child(2) > div:nth-child(1)"
		);

		expect(textareaElement).toBeInTheDocument();
	});
});
