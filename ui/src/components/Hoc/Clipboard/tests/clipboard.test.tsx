import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import Clipboard from "../Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

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
