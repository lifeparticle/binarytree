import { render, screen } from "@testing-library/react";
import Uuid from "pages/Generator/Uuid";

describe("Uuid Component", () => {
	it("renders correctly", () => {
		render(<Uuid />);
		expect(screen.getByText("UUID Generator")).toBeInTheDocument();
		expect(screen.getByRole("spinbutton")).toBeInTheDocument();
	});
});
