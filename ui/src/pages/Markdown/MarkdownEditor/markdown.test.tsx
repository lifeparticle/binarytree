import { describe, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MarkdownEditor from ".";
// import { DarkModeProvider } from "Provider";

describe("Markdown Component", () => {
	test("render component without crashing", () => {
		render(<MarkdownEditor />);
	});

	test("render buttons correctly", () => {
		render(<MarkdownEditor />);
		const clearButtonElement = screen.getByRole("button", {
			name: /clear/i,
		});

		const downloadMarkdownElement = screen.getByRole("button", {
			name: /download markdown/i,
		});

		const downloadMarkdownPdfElement = screen.getByRole("button", {
			name: /download html/i,
		});

		const copyButtonElement = screen.getByRole("button", {
			name: /copy/i,
		});

		expect(downloadMarkdownPdfElement).toBeInTheDocument();

		expect(downloadMarkdownElement).toBeInTheDocument();
		expect(copyButtonElement).toBeInTheDocument();

		expect(clearButtonElement).toBeInTheDocument();
	});

	test("Markdown Editor test", async () => {
		render(<MarkdownEditor />);

		const typedText = "# Hello, World!";

		const markdownEditor = screen.getByRole("textbox");
		expect(markdownEditor).toBeInTheDocument();

		fireEvent.change(markdownEditor, {
			target: {
				value: typedText,
			},
		});

		expect(markdownEditor).toHaveValue(typedText);
	});
});
