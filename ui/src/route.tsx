import News from "pages/news";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// ----------------Page -----------
const ColorPicker = lazy(() => import("pages/ColorPicker"));
const ImageGeneratorFromColors = lazy(
	() => import("pages/ImageGeneratorFromColors")
);
const MarkdownEditor = lazy(() => import("pages/MarkdownEditor"));
const Icons = lazy(() => import("pages/Icons"));
const TextEditor = lazy(() => import("pages/TextEditor"));
const DataGenerator = lazy(() => import("pages/DataGenerator"));
const Base64 = lazy(() => import("pages/Base64"));
const PixelConverter = lazy(() => import("pages/PixelConverter"));
const TableOfContent = lazy(() => import("pages/TableOfContent"));
const Shades = lazy(() => import("pages/Shades"));
const TableGenerator = lazy(() => import("pages/MdTableGenerator"));
const Sorting = lazy(() => import("pages/Sorting"));

// --------------EndPage----------

export default function Router() {
	const routes = useRoutes([
		{
			path: "/",
			element: <News />,
		},
		{
			path: "/sorting",
			element: <Sorting />,
		},
		{
			path: "/me",
			element: <MarkdownEditor />,
		},
		{
			path: "/igfc",
			element: <ImageGeneratorFromColors />,
		},
		{
			path: "/te",
			element: <TextEditor />,
		},
		{
			path: "/icons",
			element: <Icons />,
		},
		{
			path: "/data_gen",
			element: <DataGenerator />,
		},
		{
			path: "/cp",
			element: <ColorPicker />,
		},
		{
			path: "/base_64",
			element: <Base64 />,
		},
		{
			path: "/shades",
			element: <Shades />,
		},
		{
			path: "/pixel_converter",
			element: <PixelConverter />,
		},
		{
			path: "/toc",
			element: <TableOfContent />,
		},
		{
			path: "/md_table_generator",
			element: <TableGenerator />,
		},

		{
			path: "*",
			element: <Navigate to="/404" />,
		},
	]);

	return routes;
}
