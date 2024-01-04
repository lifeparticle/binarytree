// helpers
import { parseXML, extractImage } from "../helper";
// mocks
import { mockedXMLString, mockedParsedXML, mockedXMLStringMissingDescription } from "./newsFeed.testkit";
describe("parseXML", () => {
	it("should parse valid XML string", () => {
		// act
		const response = parseXML(mockedXMLString);

		// assert
		expect(response).toEqual(mockedParsedXML);
	});

	it('should return an empty array on invalid xml', () => {
		// act
		const response = parseXML('invalid xml');

		// assert
		expect(response).toEqual([]);
	})

	it('should throw an error on missing description tag', () => {
		// assert
		expect(() => parseXML(mockedXMLStringMissingDescription)).toThrow()
	})
});

describe("extractImage", () => {
	it("should extract image URL from description", () => {
		const description =
			'Check out this image: <img src="https://example.com/image.jpg" alt="Image">';
		const expected = "https://example.com/image.jpg";
		expect(extractImage(description)).toBe(expected);
	});

	it("should return null if no image URL found in description", () => {
		const description = "This is a text description without any image.";
		expect(extractImage(description)).toBeNull();
	});
});
