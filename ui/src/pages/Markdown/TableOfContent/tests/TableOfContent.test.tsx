import { render } from "@testing-library/react";
import { TableOfContent } from "pages/pages";
import { describe, test } from "vitest";

describe("Table Of content", () => {
	test("Render component without crash", () => {
		render(<TableOfContent />);
	});
});
