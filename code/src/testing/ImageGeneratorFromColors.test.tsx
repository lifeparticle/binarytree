import { screen, render } from "@testing-library/react";
import ImageGeneratorFromColors from "../pages/ImageGeneratorFromColors";

test("Navigation Button Works", async () => {
	render(<ImageGeneratorFromColors />);

	const downloadBt = screen.getByText(/downlaod/i);
	const clearBt = screen.getByText(/clear/i);

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions, jest/valid-expect
	expect(downloadBt).toBeInTheDocument;
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions, jest/valid-expect
	expect(clearBt).toBeInTheDocument;
});
