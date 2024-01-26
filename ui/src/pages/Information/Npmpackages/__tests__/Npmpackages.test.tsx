//  components
import Npmpackages from "pages/Information/Npmpackages";
// dependencies
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
// hooks
import { useFetch } from "hooks";
// testkit
import { generatePackageData } from "pages/Information/Npmpackages/__tests__/Npmpackages.testkit";
// types
import { PackageListProps } from "pages/Information/Npmpackages/types";

vi.mock("hooks");

const mockPackageListProps = vitest.fn();
vi.mock("pages/Information/Npmpackages/components/PackageList", () => {
    const PackageList = (props: PackageListProps) => {
        mockPackageListProps(props);
        return (<div data-testid="package-list" />);
    }
    return { default: PackageList };
});

vi.mock("components/General", () => ({
	Text: (props: { text: string }) => <div>{props.text}</div>
}));

describe('Npmpackages', () => {

	const data = generatePackageData();

    beforeEach(() => {
        vi.mocked(useFetch).mockReturnValue({
            data,
            isLoading: false,
            isError: false,
        })
    });

    it('should render without crashing', () => {
        // act
        render(<Npmpackages />);

        // assert
        const packageList = screen.getByTestId("package-list");
        expect(packageList).toBeInTheDocument();
        expect(mockPackageListProps).toHaveBeenCalledWith({
            isLoading: false,
            packages: data.packages,
        });
    });

	it('should render error component', () => {
		// arrange
		vi.mocked(useFetch).mockReturnValue({
			data: {},
			isLoading: false,
			isError: true,
		});

		// act
		render(<Npmpackages />);

		// assert
		const packageList = screen.getByText("Something went wrong");
		expect(packageList).toBeInTheDocument();
	})

	it('should render API_NO_DATA component', () => {
		// arrange
		vi.mocked(useFetch).mockReturnValue({
			data: {
				packages: [],
				lastDate: 1705796301703
			},
			isLoading: false,
			isError: false,
		});

		// act
		render(<Npmpackages />);

		// assert
		const packageList = screen.getByText("No data found");
		expect(packageList).toBeInTheDocument();
	});

	it('should render API_NO_DATA component with data undefined', () => {
		// arrange
		vi.mocked(useFetch).mockReturnValue({
			data: {packages: undefined},
			isLoading: false,
			isError: false,
		});

		// act
		render(<Npmpackages />);

		// assert
		const packageList = screen.getByText("No data found");
		expect(packageList).toBeInTheDocument();
	});

});