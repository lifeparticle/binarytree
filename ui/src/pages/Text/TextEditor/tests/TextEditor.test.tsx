import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import TextEditor from "pages/Text/TextEditor";
import { MemoryRouter } from "react-router-dom";

describe("TextEditor", () => {
	test("render component without crash", () => {
		render(
			<MemoryRouter>
				<TextEditor />
			</MemoryRouter>
		);
	});
});
