// components
import PackageList from "pages/Information/Npmpackages/components/PackageList";
// dependencies
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
// testkit
import { generatePackageData } from "pages/Information/Npmpackages/__tests__/Npmpackages.testkit";
// types
import { PackageProps } from "pages/Information/Npmpackages/types";

vi.mock("pages/Information/Npmpackages/components/PackageSkeleton", () => {
    const PackageSkeleton = () => <div data-testid="package-skeleton" />;
    return { default: PackageSkeleton };
})

const mockPackageProps = vi.fn();
vi.mock("pages/Information/Npmpackages/components/Package", () => {
    const Package = (props: PackageProps) => {
        mockPackageProps(props);
        return <div data-testid="package" />;
    };
    return { default: Package };
})

describe('PackageList component', () => {
    it('should render the loading skeleton', () => {
        // arrange
        const props = {
            isLoading: true,
            packages: [],
        };

        // act
        render(<PackageList {...props} />);

        // assert
        const packageSkeleton = screen.getAllByTestId("package-skeleton");
        expect(packageSkeleton.length).toBe(4);
    });

    it('should render the package list', () => {
        // arrange
        const packages = generatePackageData().packages;
        const props = {
            isLoading: false,
            packages,
        };

        // act
        render(<PackageList {...props} />);

        // assert
        const packageList = screen.getAllByTestId("package");
        expect(packageList.length).toBe(packages.length);
    });
});