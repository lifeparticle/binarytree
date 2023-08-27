import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Menu from "components/Layouts/Menu";

describe("Menu Component", () => {
	test("render compoent without crash", () => {
		act(() => {
			render(
				<MemoryRouter>
					<Menu collapsed={false} isDarkMode={false} />
				</MemoryRouter>
			);
		});

		const antdMenuComponent = screen.getByRole("menu");
		expect(antdMenuComponent).toBeInTheDocument();

		act(() => {
			const menuItem = screen.getByRole("menuitem", {
				name: "Colors",
			});
			fireEvent.click(menuItem);
		});
	});
});
