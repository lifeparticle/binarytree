import { render, screen } from "@testing-library/react";
import ListSearchResults from "components/RenderProps/ListSearchResults";
import { API_ERROR, API_LOADING, API_NO_DATA } from "data/constants";
import { MemoryRouter } from "react-router-dom";

describe("ListSearchResults Component", () => {
	it("renders an error message when isError is true", () => {
		render(
			<MemoryRouter>
				<ListSearchResults
					items={[]}
					resourceName="news"
					itemComponent={() => <div>Item Component</div>}
					isLoading={false}
					isError={true}
				/>
			</MemoryRouter>
		);

		const errorMessage = screen.getByText(API_ERROR);
		expect(errorMessage).toBeInTheDocument();
	});

	it("renders a 'No Data' message when there are no items and isError is false", () => {
		render(
			<MemoryRouter>
				<ListSearchResults
					items={[]}
					resourceName="news"
					itemComponent={() => <div>Item Component</div>}
					isLoading={false}
					isError={false}
				/>
			</MemoryRouter>
		);

		const noDataMessage = screen.getByText(API_NO_DATA);
		expect(noDataMessage).toBeInTheDocument();
	});

	it("renders loading state when isLoading is true", () => {
		render(
			<MemoryRouter>
				<ListSearchResults
					items={[]}
					resourceName="news"
					itemComponent={() => <div>Item Component</div>}
					isLoading={true}
					isError={false}
				/>
			</MemoryRouter>
		);

		const loadingElement = screen.queryByDisplayValue(API_LOADING);
		const noDataMessage = screen.queryByDisplayValue(API_NO_DATA);

		expect(loadingElement).not.toBeInTheDocument();
		expect(noDataMessage).not.toBeInTheDocument();
	});
});
