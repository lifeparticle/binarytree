// components
import PackageSkeleton from "pages/Information/Npmpackages/components/PackageSkeleton";
// dependencies
import { render, screen } from "@testing-library/react";

describe("PackageSkeleton component", () => {
    it("renders component", () => {
        // act
        render(<PackageSkeleton />);

        // assert
        const title = screen.getByRole('heading')
        expect(title).toBeInTheDocument();
    });
})