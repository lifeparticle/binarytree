import { render } from "@testing-library/react";
import { News } from "pages/pages";
import { describe, test } from "vitest";

describe("test news component", () => {
	test("render component withoud crash", () => {
		render(<News />);
	});
});
