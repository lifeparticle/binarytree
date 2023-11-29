import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import TableOfContent from "pages/Markdown/TableOfContent/TableOfContent";

describe("Table Of content", () => {
	test("Render component without crash", () => {
		render(<TableOfContent />);
	});

	test("show empty text when there is no value", () => {
		render(<TableOfContent />);

		const text = screen.getByText(
			"There is no data for TOC, please provide data first."
		);

		expect(text).toBeInTheDocument();
	});

	test("write test based on url", () => {
		render(<TableOfContent />);

		const url = `https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md`;
		const inputElement = screen.getByPlaceholderText(/url/i);

		fireEvent.change(inputElement, {
			target: {
				value: url,
			},
		});

		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveValue(url);
	});

	test("Update the table of contents when the markdown content changes", () => {
		render(<TableOfContent />);
		const tocInput = screen.getByTestId("toc-input");
		expect(tocInput).toBeInTheDocument();

		fireEvent.change(tocInput, {
			target: { value: "# New Heading 1\n## New Heading 2" },
		});

		const tocOutput = screen.getByTestId("toc-output");

		expect(tocOutput).toBeInTheDocument();
		expect(tocOutput).not.toHaveValue(
			"[New Heading 1](#new-heading-1)\n[New Heading 2](#new-heading-2)"
		);
	});
});
