import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const News = lazy(() => import("pages/Newsfeed"));
const About = lazy(() => import("pages/About"));
const Feedback = lazy(() => import("pages/Feedback"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));
const Terms = lazy(() => import("pages/Footer/Terms"));
const PrivacyPolicy = lazy(() => import("pages/Footer/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("pages/Footer/CookiePolicy"));

const ColorPicker = lazy(() => import("pages/Colors/ColorPicker"));
const ShadesAndTints = lazy(() => import("pages/Colors/ShadesAndTints"));

const BorderRadius = lazy(() => import("pages/CSS/BorderRadius"));
const BoxShadow = lazy(() => import("pages/CSS/BoxShadow"));

const Base64 = lazy(() => import("pages/Converter/Base64"));
const Pixel = lazy(() => import("pages/Converter/Pixel"));
const JsonToTypescript = lazy(() => import("pages/Converter/JsonToTypescript"));
const CodeFormatter = lazy(() => import("pages/Converter/CodeFormatter"));

const DataGenerator = lazy(() => import("pages/Generator/DataGenerator"));
const ImageGeneratorFromColors = lazy(
	() => import("pages/Generator/ImageGeneratorFromColors")
);
const Avatar = lazy(() => import("pages/Generator/Avatar"));
const QRcode = lazy(() => import("pages/Generator/QRcode"));

const Blog = lazy(() => import("pages/Resource/Blog"));
const Book = lazy(() => import("pages/Resource/Book"));
const Course = lazy(() => import("pages/Resource/Course"));
const DesignSystem = lazy(() => import("pages/Resource/DesignSystem"));
const Github = lazy(() => import("pages/Resource/Github"));
const Icon = lazy(() => import("pages/Resource/Icon"));
const Interview = lazy(() => import("pages/Resource/Interview"));
const Movie = lazy(() => import("pages/Resource/Movie"));
const Platform = lazy(() => import("pages/Resource/Platform"));
const Plugin = lazy(() => import("pages/Resource/Plugin"));
const Tool = lazy(() => import("pages/Resource/Tool"));
const TvSeries = lazy(() => import("pages/Resource/TvSeries"));
const UiUx = lazy(() => import("pages/Resource/UiUx"));
const YouTube = lazy(() => import("pages/Resource/YouTube"));

const MarkdownEditor = lazy(() => import("pages/Markdown/MarkdownEditor"));
const TableGenerator = lazy(() => import("pages/Markdown/MdTableGenerator"));
const TableOfContent = lazy(() => import("pages/Markdown/TableOfContent"));

const Diagramming = lazy(() => import("pages/Tools/Diagramming"));
const Diffchecker = lazy(() => import("pages/Tools/Diffchecker"));
const Sorting = lazy(() => import("pages/Tools/Sorting"));
const SvgFormatter = lazy(() => import("pages/Tools/SvgFormatter"));

const TextEditor = lazy(() => import("pages/Text/TextEditor"));

const Mimetype = lazy(() => import("pages/Information/Mimetype"));
const Npmpackages = lazy(() => import("pages/Information/Npmpackages"));

export {
	About,
	Avatar,
	Base64,
	Blog,
	Book,
	BorderRadius,
	BoxShadow,
	ColorPicker,
	Course,
	DataGenerator,
	DesignSystem,
	Diagramming,
	Diffchecker,
	Feedback,
	Github,
	Home,
	Icon,
	ImageGeneratorFromColors,
	Interview,
	JsonToTypescript,
	CodeFormatter,
	MarkdownEditor,
	Mimetype,
	Npmpackages,
	Movie,
	News,
	PageNotFound,
	Pixel,
	Platform,
	Plugin,
	PrivacyPolicy,
	CookiePolicy,
	QRcode,
	ShadesAndTints,
	Sorting,
	SvgFormatter,
	TableGenerator,
	TableOfContent,
	Terms,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	YouTube,
};
