// ----------------Page -----------
import Channel from "pages/Channel";
import GithubList from "pages/GithubList";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const News = lazy(() => import("pages/News"));
const Sorting = lazy(() => import("pages/Sorting"));
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
// --------------EndPage----------

const routes = [
	{
		path: "/",
		element: <News />,
		title: "Dashboard",
	},
	{
		path: "/sorting",
		element: <Sorting />,
		title: "Sorting",
	},
	{
		path: "/me",
		element: <MarkdownEditor />,
		title: "Markdown Editor",
	},
	{
		path: "/igfc",
		element: <ImageGeneratorFromColors />,
		title: "Image Generator From Colors",
	},
	{
		path: "/te",
		element: <TextEditor />,
		title: "Text Editor",
	},
	{
		path: "/data_gen",
		element: <DataGenerator />,
		title: "Data Generator",
	},
	{
		path: "/cp",
		element: <ColorPicker />,
		title: "Color Picker",
	},
	{
		path: "/base_64",
		element: <Base64 />,
		title: "Base64",
	},
	{
		path: "/shades",
		element: <Shades />,
		title: "Shades",
	},
	{
		path: "/pixel_converter",
		element: <PixelConverter />,
		title: "Pixel Converter",
	},
	{
		path: "/toc",
		element: <TableOfContent />,
		title: "Table Of Content",
	},
	{
		path: "/md_table_generator",
		element: <TableGenerator />,
		title: "Markdown Table Generator",
	},
	{
		path: "/icons",
		element: <Icons />,
		title: "Icons",
	},
	{
		path: "/youtube-channel",
		element: <Channel />,
		title: "Channel",
	},
	{
		path: "/github-repo",
		element: <GithubList />,
		title: "Github Repository",
	},
	{
		path: "*",
		element: <Navigate to="/404" />,
		title: "Page Not Found",
	},
];

export { routes };
