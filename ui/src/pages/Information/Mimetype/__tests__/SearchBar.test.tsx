// components
import SearchBar from "pages/Information/Mimetype/components/SearchBar";
// dependencies
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// hooks
import useParamsValue from "hooks/useParamsValue";

vi.mock('hooks/useParamsValue');

describe("SearchBar", () => {
    const user = userEvent.setup();

    it('should render the component', () => {
        // Arrange
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParams: vi.fn(),
            updateParamsValue: vi.fn(),
        });

        // Act
        render(<SearchBar />);

        // Assert
        const input = screen.getByPlaceholderText("Search by Name or Content-type...");
        expect(input).toBeInTheDocument();
    })

    it("should update query params on input change", async () => {
        // Arrange
        const updateParamsValue = vi.fn();
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParams: vi.fn(),
            updateParamsValue,
        })

        // Act
        render(<SearchBar />);

        const input = screen.getByPlaceholderText("Search by Name or Content-type...");
        await user.type(input, "example");

        // Assert
        expect(updateParamsValue).toHaveBeenCalledWith("type", "example");
    });

    it("should render with initial query params and clear the input", async () => {
        // Arrange
        const searchParams = new URLSearchParams();
        searchParams.set("type", "example");
        vi.mocked(useParamsValue).mockReturnValue({
            searchParams,
            setSearchParams: vi.fn(),
            updateParamsValue: vi.fn(),
        });

        // Act
        render(<SearchBar />);

        // Assert
        const input = screen.getByPlaceholderText("Search by Name or Content-type...");
        expect(input).toHaveValue("example");

        const clearButton = screen.getByRole("button");
        expect(clearButton).toBeInTheDocument();

        await user.click(clearButton);

        expect(input).toHaveValue("");
    });
});
