// component
import Newsfeed from "pages/Newsfeed";
// dependencies
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// hooks
import useNewsFeed from "pages/Newsfeed/useNewsFeed";
// types
import { ListSearchResultsProps } from "components/ComponentInjector/ListSearchResults/ListSearchResults";
import { TAB_ITEMS } from "pages/Newsfeed/constants";

vi.mock("pages/Newsfeed/useNewsFeed");

type Items = unknown[];

const mockListSearchResultsProps = vi.fn();
vi.mock("components/ComponentInjector", () => ({
	ListSearchResults: (props: ListSearchResultsProps<Items>) => {
		mockListSearchResultsProps(props);
		return <div data-testid="list-search-results" />;
	},
}));

const user = userEvent.setup();

describe("News component", () => {
	const mockSetTab = vi.fn();
	const newsFeedData = ["some data"];

	// Setup phase
	beforeEach(() => {
		vi.mocked(useNewsFeed).mockReturnValue({
			data: newsFeedData,
			isLoading: false,
			isError: false,
			setTab: mockSetTab,
		});

		render(<Newsfeed />);
	});

	it("renders search results list", () => {
		// Assert phase for the search results list
		const listSearchResults = screen.getByTestId("list-search-results");
		expect(listSearchResults).toBeInTheDocument();
	});

	it("calls mockListSearchResultsProps with correct arguments", () => {
		// Assert phase for mock function call
		expect(mockListSearchResultsProps).toHaveBeenCalledWith({
			isError: false,
			isLoading: false,
			itemComponent: expect.any(Function),
			items: ["some data"],
			resourceName: "news",
		});
	});

	describe("Tabs functionality", () => {
		// Setup phase for tabs, run only if TAB_ITEMS is defined
		let tabs: HTMLElement[];
		beforeEach(() => {
			tabs = screen.getAllByRole("tab");
		});

		it("renders the correct number of tabs", () => {
			// Assert phase for the number of tabs

			expect(tabs).toHaveLength(TAB_ITEMS.length);
		});

		it("renders tabs with correct labels", () => {
			// Assert phase for tab labels
			TAB_ITEMS.forEach((tabItem, index) => {
				expect(tabs[index]).toHaveTextContent(tabItem.label);
			});
		});

		it("calls the SetTabValue function with the correct argument when a tab is changed", async () => {
			// Iterate over each tab item defined in TAB_ITEMS
			TAB_ITEMS.forEach(async (tabItem, index) => {
				// Simulate clicking on the tab
				await user.click(tabs[index]);

				// Assert that mockSetTab was called with the 'key' of the current tabItem
				expect(mockSetTab).toHaveBeenCalledWith(tabItem.key);

				// Reset mock function history after each assertion to ensure independence
				mockSetTab.mockClear();
			});
		});
	});
});
