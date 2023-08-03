import { render, fireEvent } from "@testing-library/react";
import { describe, test, vi, vitest } from "vitest";

import Clipboard, { ClipboardProps } from "../Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
import useCopyToClipboard from "lib/utils/hooks/useCopyToClipboard";

describe("Clipboard Component", () => {
	const testText = "Test Text";
	test("render clipboard without crased", () => {
		render(
			<Clipboard text={testText} clipboardComponent={ClipboardButton} />
		);
	});

	test("render clipboard message and ClipboardButton", () => {
		const { getByRole } = render(
			<Clipboard text={testText} clipboardComponent={ClipboardButton} />
		);

		const copyButton = getByRole("button");
		expect(copyButton).toBeInTheDocument();
	});
});
