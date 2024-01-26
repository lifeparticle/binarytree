// components
import Mimetype from 'pages/Information/Mimetype'
// dependencies
import {render, screen} from "@testing-library/react";
import { vi } from "vitest";
// hooks
import { useFetch } from 'hooks';
// types
import { MimeSearchResultProps } from "pages/Information/Mimetype/types";

vi.mock("hooks");

const mockMimeSearchResultPros = vi.fn();
vi.mock("pages/Information/Mimetype/components/MimeSearchResult", () => {
    const MimeSearchResult = (props: MimeSearchResultProps) => {
        mockMimeSearchResultPros(props);
        return <div data-testid="MimeSearchResult" /> 
    }

    return { default: MimeSearchResult }
});

describe('Mimetype page', () => {
    it('should render the mimetype page', () => {
        // arrange
        vi.mocked(useFetch).mockReturnValue({
            data: 'some data',
            isError: false,
            isLoading: false,
        });

        // act
        render(<Mimetype />);

        // assert
        const mimeSearchResult = screen.getByTestId("MimeSearchResult");
        expect(mimeSearchResult).toBeInTheDocument();
        expect(mockMimeSearchResultPros).toHaveBeenCalledWith({
            data: 'some data',
            isError: false,
            isLoading: false,
        
        });
        expect(useFetch).toHaveBeenCalledWith("mimetype", "/mime/data.json");
    })

    it('should render mime search result as loading', () => {
        // arrange
        vi.mocked(useFetch).mockReturnValue({
            data: null,
            isError: false,
            isLoading: true,
        });

        // act
        render(<Mimetype />);

        // assert
        expect(mockMimeSearchResultPros).toHaveBeenCalledWith({
            data: null,
            isError: false,
            isLoading: true,
        
        });
    })

    it('should render mime search result as error', () => {
        // arrange
        vi.mocked(useFetch).mockReturnValue({
            data: null,
            isError: true,
            isLoading: false,
        });

        // act
        render(<Mimetype />);

        // assert
        expect(mockMimeSearchResultPros).toHaveBeenCalledWith({
            data: null,
            isError: true,
            isLoading: false,
        
        });
    })
})