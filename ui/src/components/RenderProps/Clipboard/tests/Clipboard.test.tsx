import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import Clipboard from "..";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

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
