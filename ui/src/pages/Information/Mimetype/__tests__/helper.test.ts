// helpers
import { filteredMimeType } from "pages/Information/Mimetype/helper";
// mocks
import { mockItems } from "pages/Information/Mimetype/__tests__/Mimetype.testkit";

describe("filteredMimeType", () => {
    it("should return filtered items based on name", () => {
        // act
        const result = filteredMimeType(mockItems, "aac");
        
        // assert
        expect(result).toEqual([
            {
                name: ".aac",
                example: "AAC audio",
                code: { "content-type": "audio/aac" }
            }
        ]);
    });

    it("should return filtered items based on content-type", () => {
        // act
        const result = filteredMimeType(mockItems, "freearc");
        
        // assert
        expect(result).toEqual([
            {
                name: ".arc",
                example: "Archive document (multiple files embedded)",
                code: { "content-type": "application/x-freearc" }
            },
        ]);
    });

    it("should return empty array if no items match the search query", () => {
        // act
        const result = filteredMimeType(mockItems, "unknown");
        
        // assert
        expect(result).toEqual([]);
    });

    it("should handle empty items array", () => {
        // act
        const result = filteredMimeType([], "jpeg");
        
        // assert
        expect(result).toEqual([]);
    });

    it("should handle empty search query", () => {
        // act
        const result = filteredMimeType(mockItems, "");
        
        // assert
        expect(result).toEqual(mockItems);
    });

    it("should handle undefined items array", () => {
        // act
        // @ts-expect-error - ignore TS error for testing purposes
        const result = filteredMimeType(undefined, "jpeg");
        
        // assert
        expect(result).toEqual(undefined);
    });
});
