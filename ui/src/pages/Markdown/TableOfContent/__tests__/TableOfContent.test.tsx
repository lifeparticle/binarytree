import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import TableOfContent from "pages/Markdown/TableOfContent";
import { useFetch } from "hooks";

vi.mock("hooks", async () => {
	const actual = await vi.importActual("hooks");
	return {
		...actual,
		useFetch: vi.fn(),
	};
});

describe("Table Of content", () => {
	beforeEach(() => {
		(useFetch as jest.Mock).mockReturnValue({
			isLoading: true,
			isError: false,
			data: null,
		});
	});

	test("renders TableOfContent component", () => {
		render(<TableOfContent />);
		expect(screen.getByTitle("Input URL")).toBeInTheDocument();
		expect(screen.getByTitle("Content")).toBeInTheDocument();
	});
});
