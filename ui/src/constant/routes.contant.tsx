// ----------------Page -----------
import Base64 from "pages/Base64";
import ColorPicker from "pages/ColorPicker";
import DataGenerator from "pages/DataGenerator";
import Icons from "pages/Icons";
import ImageGeneratorFromColors from "pages/ImageGeneratorFromColors";
import MarkdownEditor from "pages/MarkdownEditor";
import TableGenerator from "pages/MdTableGenerator";
import PixelConverter from "pages/PixelConverter";
import Shades from "pages/Shades";
import Sorting from "pages/Sorting";
import TableOfContent from "pages/TableOfContent";
import TextEditor from "pages/TextEditor";
import News from "pages/news";
import { Navigate } from "react-router-dom";
// --------------EndPage----------

export const routes = [
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
];
