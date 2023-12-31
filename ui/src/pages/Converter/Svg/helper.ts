function combineSVGPaths(svgInput: string): string {
	try {
		const parser = new DOMParser();
		const svgDocument = parser.parseFromString(svgInput, "image/svg+xml");

		const pathElements = svgDocument.querySelectorAll("path");

		if (pathElements.length === 0) {
			throw new Error("No <path> elements found in the SVG.");
		}

		const pathDataArray = Array.from(pathElements).map((path) =>
			path.getAttribute("d")
		);

		const combinedPathData = pathDataArray.join("\n");
		const svgElement = svgDocument.querySelector("svg");

		if (svgElement) {
			const firstPathStroke =
				pathElements[0].getAttribute("stroke") ?? "none";
			svgElement.innerHTML = `<path d="${combinedPathData}" stroke="${firstPathStroke}" />`;
		} else {
			throw new Error("<svg> element not found in the SVG.");
		}

		const serializer = new XMLSerializer();
		const combinedSVGString = serializer.serializeToString(svgDocument);

		return combinedSVGString;
	} catch (error) {
		console.error(error);
		return "Error combining SVG paths.";
	}
}

export { combineSVGPaths };
