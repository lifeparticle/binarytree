import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import TextEditor from "pages/Text/TextEditor";

describe("TextEditor", () => {
	test("render component without crash", () => {
		render(<TextEditor />);
	});
});
