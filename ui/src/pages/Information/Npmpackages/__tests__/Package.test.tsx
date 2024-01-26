// components
import Package from "pages/Information/Npmpackages/components/Package";
// dependencies
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { vi } from "vitest";

describe('Package component', () => {

    const user = userEvent.setup();

    const resource = {
        key: "test",
        url: `https://www.npmjs.com/package/test`,
        version: '1.0.0',
        new: true,
    };

    it('should render the package card as new', () => {
        // act
        render(<Package resource={resource} />);

        // assert
        const packageName = screen.getByText("test@1.0.0");
        expect(packageName).toBeInTheDocument();

        const newTag = screen.getByText("NEW");
        expect(newTag).toBeInTheDocument();

        const windowSpy = vi.spyOn(window, "open");
        expect(windowSpy).not.toHaveBeenCalled()
    })

    it('should render the package as not new', () => {
        // arrange
        const resourceNotNew = {
            ...resource,
            new: false,
        };

        // act
        render(<Package resource={resourceNotNew} />);

        // assert
        const tag = screen.queryByText("NEW");
        expect(tag).not.toBeInTheDocument();
    })

    it('should open the package url in a new tab', async () => {
        // arrange
        const oldWindow = window.open;
        window.open = vi.fn();

        // act
        render(<Package resource={resource} />);

        // assert
        const packageName = screen.getByText("test@1.0.0");
        await user.click(packageName);
        expect(window.open).toHaveBeenCalledWith(resource.url, "_blank", "noopener");

        // cleanup
        window.open = oldWindow;
    })

});