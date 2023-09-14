import { Route } from "./types";
import {
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
	Feedback,
	Github,
	Home,
	Icon,
	ImageGeneratorFromColors,
	JsonToTypescript,
	MarkdownEditor,
	Mimetype,
	Movie,
	News,
	PageNotFound,
	Pixel,
	Platform,
	Plugin,
	QRcode,
	ShadesAndTints,
	Sorting,
	SvgFormatter,
	TableGenerator,
	TableOfContent,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	YouTube,
} from "pages/pages";

const routes: Route[] = [
	{
		path: "/newsfeed",
		title: "Newsfeed",
		component: News,
	},
	{
		path: "/colors/cp",
		title: "Color Picker",
		component: ColorPicker,
	},
	{
		path: "/colors/shades-tints",
		title: "Shades & Tints",
		component: ShadesAndTints,
	},
	{
		path: "/css/br",
		title: "Border Radius",
		component: BorderRadius,
	},
	{
		path: "/css/bs",
		title: "Box Shadow",
		component: BoxShadow,
	},
	{
		path: "/css/svg-formatter",
		title: "SVG Formatter",
		component: SvgFormatter,
	},
	{
		path: "/converter/base-64",
		title: "Base64",
		component: Base64,
	},
	{
		path: "/converter/pixel",
		title: "Pixel Converter",
		component: Pixel,
	},
	{
		path: "/converter/jtt",
		title: "Json To Typescript",
		component: JsonToTypescript,
	},
	{
		path: "/generator/data",
		title: "Data",
		component: DataGenerator,
	},
	{
		path: "/generator/avatar",
		title: "Avatar",
		component: Avatar,
	},
	{
		path: "/generator/igfc",
		title: "Image",
		component: ImageGeneratorFromColors,
	},
	{
		path: "/generator/qrcode",
		title: "QR Code",
		component: QRcode,
	},
	{
		path: "/generator/sorting",
		title: "Sorting",
		component: Sorting,
	},
	{
		path: "/list/blog",
		title: "Blog",
		component: Blog,
	},
	{
		path: "/list/book",
		title: "Book",
		component: Book,
	},
	{
		path: "/list/course",
		title: "Course",
		component: Course,
	},
	{
		path: "/list/design-system",
		title: "Design System",
		component: DesignSystem,
	},
	{
		path: "/list/github",
		title: "Github",
		component: Github,
	},
	{
		path: "/list/icon",
		title: "Icon",
		component: Icon,
	},
	{
		path: "/list/movie",
		title: "Movie",
		component: Movie,
	},
	{
		path: "/list/platform",
		title: "Platform",
		component: Platform,
	},
	{
		path: "/list/plugin",
		title: "Plugin",
		component: Plugin,
	},
	{
		path: "/list/tool",
		title: "Tool",
		component: Tool,
	},
	{
		path: "/list/tv-series",
		title: "TV Series",
		component: TvSeries,
	},
	{
		path: "/list/ui-ux",
		title: "UI/UX",
		component: UiUx,
	},
	{
		path: "/list/youtube",
		title: "Youtube",
		component: YouTube,
	},
	{
		path: "/markdown/me",
		title: "Editor",
		component: MarkdownEditor,
	},
	{
		path: "/markdown/md-table-generator",
		title: "Table",
		component: TableGenerator,
	},
	{
		path: "/markdown/toc",
		title: "Table Of Content",
		component: TableOfContent,
	},
	{
		path: "/text/te",
		title: "Text Editor",
		component: TextEditor,
	},
	{
		path: "/info/mimetype",
		title: "Mimetype",
		component: Mimetype,
	},
	{
		path: "/",
		title: "",
		component: Home,
	},
	{
		path: "/about",
		title: "About",
		component: About,
	},
	{
		path: "/feedback",
		title: "Feedback",
		component: Feedback,
	},
	{
		path: "*",
		title: "Page Not Found",
		component: PageNotFound,
	},
];

export { routes };
