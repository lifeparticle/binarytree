import { render } from "@testing-library/react";
import Test from "pages/Test";

describe("Test Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<Test />);
		expect(getByText("Test")).toBeInTheDocument();
	});
});