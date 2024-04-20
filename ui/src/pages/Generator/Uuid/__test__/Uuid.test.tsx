import { render } from "@testing-library/react";
import Uuid from "pages/Generator/Uuid";

describe("Uuid Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<Uuid />);
		expect(getByText("UUID")).toBeInTheDocument();
	});
});
