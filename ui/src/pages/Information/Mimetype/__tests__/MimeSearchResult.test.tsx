// components
import MimeSearchResult from "../components/MimeSearchResult";
// dependencies
import { render, screen } from "@testing-library/react";
// hooks
import useParamsValue from "hooks/useParamsValue";
// mocks
import { mockItems } from "pages/Information/Mimetype/__tests__/Mimetype.testkit";

vi.mock("pages/Information/Mimetype/components/SearchBar", () => {
    const SearchBar = () => <div data-testid="search-bar">Search Bar</div>;
    return { default: SearchBar}
});
vi.mock("hooks/useParamsValue");

describe("MimeSearchResult", () => {
    beforeEach(() => {
        const searchParams = new URLSearchParams();
        searchParams.set("type", "");
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams,
            setSearchParams: vi.fn(),
            updateParamsValue: vi.fn(),
        })
    })

    it("renders the table with the provided data", () => {
        // act
        render(<MimeSearchResult data={mockItems} isError={false} isLoading={false} />);

        // assert
        const tableRows = screen.getAllByRole("row");
        expect(tableRows).toHaveLength(4); // 1 hidden table body row + 3 data rows

        expect(screen.getByText(".aac")).toBeInTheDocument();
        expect(screen.getByText("AAC audio")).toBeInTheDocument();
        expect(screen.getByText(/audio\/aac/i)).toBeInTheDocument();

        expect(screen.getByText(".abw")).toBeInTheDocument();
        expect(screen.getByText("AbiWord document")).toBeInTheDocument();
        expect(screen.getByText(/application\/x-abiword/i)).toBeInTheDocument();

        expect(screen.getByText(".arc")).toBeInTheDocument();
        expect(screen.getByText("Archive document (multiple files embedded)")).toBeInTheDocument();
        expect(screen.getByText(/application\/x-freearc/i)).toBeInTheDocument();

        expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    });

    it("displays an error message when isError prop is true", () => {
        // act
        render(<MimeSearchResult data={[]} isError={true} isLoading={false} />);
        
        // assert
        const error = screen.getByText("Something went wrong!");
        expect(error).toBeInTheDocument();
    });

    it("displays a loading state when isLoading prop is true", () => {
        // act
        render(<MimeSearchResult data={[]} isError={false} isLoading={true} />);

        // assert
        expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it('renders the table with predefined search query', () => {
        // arrange
        const searchParams = new URLSearchParams();
        searchParams.set("type", "audio");
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams,
            setSearchParams: vi.fn(),
            updateParamsValue: vi.fn(),
        })

        // act
        render(<MimeSearchResult data={mockItems} isError={false} isLoading={false} />);

        // assert
        expect(screen.getAllByRole('row')).toHaveLength(2); // 1 hidden table body row + 1 data row
    })

    it('renders the table with no data on predefined search query', () => {
        // arrange
        const searchParams = new URLSearchParams();
        searchParams.set("type", "abc");
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams,
            setSearchParams: vi.fn(),
            updateParamsValue: vi.fn(),
        })

        // act
        render(<MimeSearchResult data={mockItems} isError={false} isLoading={false} />);

        // assert
        expect(screen.getAllByRole("row")).toHaveLength(2); // 1 hidden table body row + no data row
        expect(screen.getByText("No data")).toBeInTheDocument();
    })
});
