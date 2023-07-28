import { screen, render } from "@testing-library/react";
import ImageGeneratorFromColors from "..";

test("Navigation Button Works", async () => {
	render(<ImageGeneratorFromColors />);

	const downloadBt = screen.getByText(/downlaod/i);
	const clearBt = screen.getByText(/clear/i);

	expect(downloadBt).toBeInTheDocument();
	expect(clearBt).toBeInTheDocument();
});
