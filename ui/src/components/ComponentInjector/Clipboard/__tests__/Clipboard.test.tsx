import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";

describe("Clipboard Component", () => {
	const testText = "Test Text";
	test("render clipboard without crased", () => {
		render(
			<Clipboard text={testText} clipboardComponent={ClipboardButton} />
		);
	});

	test("ClipboardButton", () => {
		render(
			<Clipboard text={testText} clipboardComponent={ClipboardButton} />
		);

		const copyButton = screen.getByRole("button");
		expect(copyButton).toBeInTheDocument();
	});
});
