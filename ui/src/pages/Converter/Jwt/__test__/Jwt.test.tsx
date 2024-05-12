import { render } from "@testing-library/react";
import Jwt from "pages/Converter/Jwt";

describe("JWT Component", () => {
	it("renders without crashing", () => {
		render(<Jwt />);
		expect(true).toBeTruthy();
	});
});
