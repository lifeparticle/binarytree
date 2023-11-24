import React, { useMemo } from "react";

interface SVGRendererProps {
	svgString: string;
}

const SVGRenderer: React.FC<SVGRendererProps> = ({ svgString }) => {
	const svgJSX = useMemo(() => {
		const parser = new DOMParser();
		const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
		if (svgDoc.documentElement.tagName.toLowerCase() !== "svg") {
			throw new Error(
				"The provided string does not contain a valid SVG element."
			);
		}
		return svgDoc.documentElement;
	}, [svgString]);

	const cloneAttributes = (element: Element) => {
		return Array.from(element.attributes).reduce((props, attr) => {
			props[attr.name] = attr.value;
			return props;
		}, {} as { [key: string]: string });
	};

	const renderSVGElement = (element: Element, index: number) => {
		const Element =
			element.tagName.toLowerCase() as keyof JSX.IntrinsicElements;
		const props = cloneAttributes(element);
		return React.createElement(Element, { key: index, ...props });
	};

	return (
		<svg {...cloneAttributes(svgJSX)}>
			{Array.from(svgJSX.children).map((child, index) => {
				if (child instanceof Element) {
					return renderSVGElement(child, index);
				}
				return null;
			})}
		</svg>
	);
};

export default SVGRenderer;
