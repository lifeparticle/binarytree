// component
import News from "pages/Newsfeed";
// dependencies
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// hooks
import useNewsFeed from "pages/Newsfeed/useNewsFeed";
// types
import { ListSearchResultsProps } from "components/ComponentInjector/ListSearchResults/ListSearchResults";

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

	beforeEach(() => {
		vi.mocked(useNewsFeed).mockReturnValue({
			data: newsFeedData,
			isLoading: false,
			isError: false,
			setTab: mockSetTab,
		});
	});

	it("renders component", () => {
		// act
		render(<News />);

		// assert
		expect(screen.getByTestId("list-search-results")).toBeInTheDocument();
		expect(mockListSearchResultsProps).toHaveBeenCalledWith({
			isError: false,
			isLoading: false,
			itemComponent: expect.any(Function),
			items: ["some data"],
			resourceName: "news",
		});

		const tabs = screen.getAllByRole("tab");
		expect(tabs).toHaveLength(3);

		const frontendTab = tabs[0];
		const reactTab = tabs[1];
		const newsTab = tabs[2];

		expect(frontendTab).toHaveTextContent("Frontend");
		expect(reactTab).toHaveTextContent("React");
		expect(newsTab).toHaveTextContent("News");
	});

	it("calls the SetTabValue function when the tab is changed", async () => {
		// act
		render(<News />);

		// assert
		const tabs = screen.getAllByRole("tab");
		const reactTab = tabs[1];
		const newsTab = tabs[2];

		await user.click(reactTab);

		expect(mockSetTab).toHaveBeenCalledWith("react-status");

		await user.click(newsTab);

		expect(mockSetTab).toHaveBeenCalledWith(
			"https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/news/news.json"
		);
	});
});
