import { lazy } from "react";

const About = lazy(() => import("pages/About"));
const CookiePolicy = lazy(() => import("pages/Footer/CookiePolicy"));
const Feedback = lazy(() => import("pages/Feedback"));
const Home = lazy(() => import("pages/Home"));
const News = lazy(() => import("pages/Newsfeed"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));
const PrivacyPolicy = lazy(() => import("pages/Footer/PrivacyPolicy"));
const Terms = lazy(() => import("pages/Footer/Terms"));

const ColorPicker = lazy(() => import("pages/Colors/ColorPicker"));
const ShadesAndTints = lazy(() => import("pages/Colors/ShadesAndTints"));

const BorderRadius = lazy(() => import("pages/CSS/BorderRadius"));
const BoxShadow = lazy(() => import("pages/CSS/BoxShadow"));
const FlexboxGenerator = lazy(() => import("pages/CSS/FlexboxGenerator"));
const Units = lazy(() => import("pages/CSS/Units"));

const Base64 = lazy(() => import("pages/Converter/Base64"));
const FileConverter = lazy(() => import("pages/Converter/File"));
const JsonToTypescript = lazy(() => import("pages/Converter/JsonToTypescript"));
const Jwt = lazy(() => import("pages/Converter/Jwt"));
const Pixel = lazy(() => import("pages/Converter/Pixel"));
const Svg = lazy(() => import("pages/Converter/Svg"));

const Avatar = lazy(() => import("pages/Generator/Avatar"));
const CSharpBuilder = lazy(() => import("pages/Generator/CSharpBuilder"));
const DataGenerator = lazy(() => import("pages/Generator/Data"));
const ImageGeneratorFromColors = lazy(() => import("pages/Generator/Image"));
const QRcode = lazy(() => import("pages/Generator/QRcode"));
const Uuid = lazy(() => import("pages/Generator/Uuid"));

const Ai = lazy(() => import("pages/Resource/Ai"));
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
const Survey = lazy(() => import("pages/Resource/Survey"));
const Template = lazy(() => import("pages/Resource/Template"));
const Tool = lazy(() => import("pages/Resource/Tool"));
const TvSeries = lazy(() => import("pages/Resource/TvSeries"));
const UiUx = lazy(() => import("pages/Resource/UiUx"));
const YouTube = lazy(() => import("pages/Resource/YouTube"));

const Docs = lazy(() => import("pages/Markdown/Docs"));
const Editor = lazy(() => import("pages/Markdown/Editor"));
const TableGenerator = lazy(() => import("pages/Markdown/TableGenerator"));
const TableOfContent = lazy(() => import("pages/Markdown/TableOfContent"));

const CodeFormatter = lazy(() => import("pages/Tools/CodeFormatter"));
const Diagramming = lazy(() => import("pages/Tools/Diagramming"));
const Diffchecker = lazy(() => import("pages/Tools/Diffchecker"));
const ProgressiveWebApp = lazy(() => import("pages/Tools/ProgressiveWebApp"));
const Sorting = lazy(() => import("pages/Tools/Sorting"));

const TextEditor = lazy(() => import("pages/Text/TextEditor"));

const Mimetype = lazy(() => import("pages/Information/Mimetype"));
const Npmpackages = lazy(() => import("pages/Information/Npmpackages"));

const GithubIsuue = lazy(() => import("pages/Automation/GithubIssue"));

const IPSubnet = lazy(() => import("pages/Networking/IPSubnet"));

export {
	About,
	Ai,
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
	FlexboxGenerator,
	Github,
	GithubIsuue,
	Home,
	Icon,
	ImageGeneratorFromColors,
	Interview,
	IPSubnet,
	JsonToTypescript,
	Jwt,
	Mimetype,
	Movie,
	News,
	Npmpackages,
	PageNotFound,
	Pixel,
	Platform,
	Plugin,
	PrivacyPolicy,
	ProgressiveWebApp,
	QRcode,
	ShadesAndTints,
	Sorting,
	Survey,
	Svg,
	TableGenerator,
	TableOfContent,
	Template,
	Terms,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	Units,
	Uuid,
	YouTube,
};
