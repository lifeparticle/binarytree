import { lazy } from "react";

const About = lazy(() => import("pages/About/About"));
const CookiePolicy = lazy(
	() => import("pages/Footer/CookiePolicy/CookiePolicy")
);
const Feedback = lazy(() => import("pages/Feedback/Feedback"));
const Home = lazy(() => import("pages/Home/Home"));
const News = lazy(() => import("pages/Newsfeed/Newsfeed"));
const PageNotFound = lazy(() => import("pages/PageNotFound/PageNotFound"));
const PrivacyPolicy = lazy(
	() => import("pages/Footer/PrivacyPolicy/PrivacyPolicy")
);
const Terms = lazy(() => import("pages/Footer/Terms/Terms"));

const ColorPicker = lazy(() => import("pages/Colors/ColorPicker/ColorPicker"));
const ShadesAndTints = lazy(
	() => import("pages/Colors/ShadesAndTints/ShadesAndTints")
);

const BorderRadius = lazy(() => import("pages/CSS/BorderRadius/BorderRadius"));
const BoxShadow = lazy(() => import("pages/CSS/BoxShadow/BoxShadow"));
const Units = lazy(() => import("pages/CSS/Units/Units"));

const Base64 = lazy(() => import("pages/Converter/Base64/Base64"));
const CodeFormatter = lazy(
	() => import("pages/Tools/CodeFormatter/CodeFormatter")
);
const FileConverter = lazy(() => import("pages/Converter/File/File"));
const JsonToTypescript = lazy(
	() => import("pages/Converter/JsonToTypescript/JsonToTypescript")
);
const Pixel = lazy(() => import("pages/Converter/Pixel/Pixel"));

const Avatar = lazy(() => import("pages/Generator/Avatar/Avatar"));
const CSharpBuilder = lazy(
	() => import("pages/Generator/CSharpBuilder/CSharpBuilder")
);
const DataGenerator = lazy(() => import("pages/Generator/Data/Data"));
const ImageGeneratorFromColors = lazy(
	() => import("pages/Generator/Image/Image")
);
const QRcode = lazy(() => import("pages/Generator/QRcode/QRcode"));

const Blog = lazy(() => import("pages/Resource/Blog/Blog"));
const Book = lazy(() => import("pages/Resource/Book/Book"));
const Course = lazy(() => import("pages/Resource/Course/Course"));
const DesignSystem = lazy(
	() => import("pages/Resource/DesignSystem/DesignSystem")
);
const Github = lazy(() => import("pages/Resource/Github/Github"));
const Icon = lazy(() => import("pages/Resource/Icon/Icon"));
const Interview = lazy(() => import("pages/Resource/Interview/Interview"));
const Movie = lazy(() => import("pages/Resource/Movie/Movie"));
const Platform = lazy(() => import("pages/Resource/Platform/Platform"));
const Plugin = lazy(() => import("pages/Resource/Plugin/Plugin"));
const Tool = lazy(() => import("pages/Resource/Tool/Tool"));
const TvSeries = lazy(() => import("pages/Resource/TvSeries/TvSeries"));
const UiUx = lazy(() => import("pages/Resource/UiUx/UiUx"));
const YouTube = lazy(() => import("pages/Resource/YouTube/YouTube"));

const Docs = lazy(() => import("pages/Markdown/Docs/Docs"));
const Editor = lazy(() => import("pages/Markdown/Editor/Editor"));
const TableGenerator = lazy(
	() => import("pages/Markdown/TableGenerator/TableGenerator")
);
const TableOfContent = lazy(
	() => import("pages/Markdown/TableOfContent/TableOfContent")
);

const Diagramming = lazy(() => import("pages/Tools/Diagramming/Diagramming"));
const Diffchecker = lazy(() => import("pages/Tools/Diffchecker/Diffchecker"));
const Sorting = lazy(() => import("pages/Tools/Sorting/Sorting"));
const Svg = lazy(() => import("pages/Converter/Svg/Svg"));

const TextEditor = lazy(() => import("pages/Text/TextEditor/TextEditor"));

const Mimetype = lazy(() => import("pages/Information/Mimetype/Mimetype"));
const Npmpackages = lazy(
	() => import("pages/Information/Npmpackages/Npmpackages")
);

const GithubIsuue = lazy(
	() => import("pages/Automation/GithubIssue/Automation")
);

export {
	About,
	Avatar,
	Base64,
	Blog,
	Book,
	BorderRadius,
	BoxShadow,
	CodeFormatter,
	ColorPicker,
	CookiePolicy,
	Course,
	CSharpBuilder,
	DataGenerator,
	DesignSystem,
	Diagramming,
	Diffchecker,
	Docs,
	Editor,
	Feedback,
	FileConverter,
	Github,
	GithubIsuue,
	Home,
	Icon,
	ImageGeneratorFromColors,
	Interview,
	JsonToTypescript,
	Mimetype,
	Movie,
	News,
	Npmpackages,
	PageNotFound,
	Pixel,
	Platform,
	Plugin,
	PrivacyPolicy,
	QRcode,
	ShadesAndTints,
	Sorting,
	Svg,
	TableGenerator,
	TableOfContent,
	Terms,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	Units,
	YouTube,
};
