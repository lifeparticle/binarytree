import { lazy } from "react";

const ColorPicker = lazy(() => import("pages/Colors/ColorPicker/ColorPicker"));
const Shades = lazy(() => import("pages/Colors/Shades"));

const Base64 = lazy(() => import("pages/Converter/Base64"));
const Pixel = lazy(() => import("pages/Converter/Pixel"));
const JsonToTypescript = lazy(() => import("pages/Converter/JsonToTypescript"));

const DataGenerator = lazy(() => import("pages/Data/DataGenerator"));
const ImageGeneratorFromColors = lazy(
	() => import("pages/Data/ImageGeneratorFromColors")
);
const Sorting = lazy(() => import("pages/Data/Sorting"));

const Blog = lazy(() => import("pages/List/Blog/Blog"));
const Book = lazy(() => import("pages/List/Book/Book"));
const Course = lazy(() => import("pages/List/Course/Course"));
const Github = lazy(() => import("pages/List/Github/Github"));
const Icon = lazy(() => import("pages/List/Icon/Icon"));
const Movie = lazy(() => import("pages/List/Movie/Movie"));
const Plugin = lazy(() => import("pages/List/Plugin/Plugin"));
const Tool = lazy(() => import("pages/List/Tool/Tool"));
const TvSeries = lazy(() => import("pages/List/TvSeries/TvSeries"));
const YouTube = lazy(() => import("pages/List/YouTube/Youtube"));

const MarkdownEditor = lazy(() => import("pages/Markdown/MarkdownEditor"));
const TableGenerator = lazy(() => import("pages/Markdown/MdTableGenerator"));
const TableOfContent = lazy(() => import("pages/Markdown/TableOfContent"));

const TextEditor = lazy(() => import("pages/Text/TextEditor"));

const News = lazy(() => import("pages/News"));

export {
	ColorPicker,
	Shades,
	Base64,
	Pixel,
	JsonToTypescript,
	DataGenerator,
	ImageGeneratorFromColors,
	Sorting,
	Blog,
	Book,
	Course,
	Github,
	Icon,
	Movie,
	Plugin,
	Tool,
	TvSeries,
	YouTube,
	MarkdownEditor,
	TableGenerator,
	TableOfContent,
	TextEditor,
	News,
};
