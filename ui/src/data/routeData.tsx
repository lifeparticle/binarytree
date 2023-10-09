import Diagramming from "pages/Tools/Diagramming";

type RouteId =
	| "/"
	| "about"
	| "avatar"
	| "base64"
	| "blog"
	| "book"
	| "borderradius"
	| "boxshadow"
	| "codeformatter"
	| "colorpicker"
	| "cookiepolicy"
	| "course"
	| "creategithubissue"
	| "data"
	| "designsystem"
	| "diagramming"
	| "diagramming"
	| "diffchecker"
	| "diffchecker"
	| "editor"
	| "feedback"
	| "feedback"
	| "github"
	| "icon"
	| "image"
	| "interview"
	| "jsontotypescript"
	| "mimetype"
	| "mimetype"
	| "movie"
	| "newsfeed"
	| "npmpackages"
	| "pagenotfound"
	| "pagenotfound"
	| "pixelconverter"
	| "platform"
	| "plugin"
	| "privacypolicy"
	| "qrcode"
	| "shadesandtints"
	| "sorting"
	| "svgformatter"
	| "table"
	| "tableofcontent"
	| "terms"
	| "texteditor"
	| "tool"
	| "tvseries"
	| "uiux"
	| "youtube";

interface Route {
	path: string;
	title: string;
	description: string;
	component: React.FC;
	id: RouteId;
}

import {
	About,
	Avatar,
	Base64,
	Blog,
	Book,
	BorderRadius,
	BoxShadow,
	ColorPicker,
	CookiePolicy,
	Course,
	DataGenerator,
	DesignSystem,
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
	SvgFormatter,
	TableGenerator,
	TableOfContent,
	Terms,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	YouTube,
} from "pages/pages";

export const routes: Route[] = [
	{
		id: "newsfeed",
		path: "/newsfeed",
		title: "Newsfeed",
		description: "Get the scoop! Fresh news served daily.",
		component: News,
	},
	{
		id: "colorpicker",
		path: "/colors/cp",
		title: "Color Picker",
		description: "Unleash your inner Picasso & pick the perfect hue.",
		component: ColorPicker,
	},
	{
		id: "shadesandtints",
		path: "/colors/shades-tints",
		title: "Shades & Tints",
		description: "50 shades of any color you fancy!",
		component: ShadesAndTints,
	},
	{
		id: "borderradius",
		path: "/css/br",
		title: "Border Radius",
		description: "Shape up your CSS with some smooth curves.",
		component: BorderRadius,
	},
	{
		id: "boxshadow",
		path: "/css/bs",
		title: "Box Shadow",
		description: "Add drama to your box! Shadows included.",
		component: BoxShadow,
	},
	{
		id: "svgformatter",
		path: "/tools/svg-formatter",
		title: "SVG Formatter",
		description: "Get your SVGs in shipshape.",
		component: SvgFormatter,
	},
	{
		id: "base64",
		path: "/converter/base-64",
		title: "Base64",
		description: "Encode, decode, and party in Base64 style.",
		component: Base64,
	},
	{
		id: "pixelconverter",
		path: "/converter/pixel",
		title: "Pixel Converter",
		description: "Pixels to REM - like magic, but real!",
		component: Pixel,
	},
	{
		id: "jsontotypescript",
		path: "/converter/jtt",
		title: "Json To Typescript",
		description: "Turn your JSON into TypeScript's next top model.",
		component: JsonToTypescript,
	},
	{
		id: "codeformatter",
		path: "/converter/code-formatter",
		title: "Code Formatter",
		description:
			"Embrace your inner Picasso of Programming. Who said formatting code can't be a masterpiece?",
		component: CodeFormatter,
	},
	{
		id: "data",
		path: "/generator/data",
		title: "Data",
		description: "Make it rain with random data.",
		component: DataGenerator,
	},
	{
		id: "avatar",
		path: "/generator/avatar",
		title: "Avatar",
		description: "Create funky avatars. No airbending skills required.",
		component: Avatar,
	},
	{
		id: "image",
		path: "/generator/igfc",
		title: "Image",
		description: "Craft beautiful images from a simple palette of colors.",
		component: ImageGeneratorFromColors,
	},
	{
		id: "qrcode",
		path: "/generator/qrcode",
		title: "QR Code",
		description: "Generate QR codes - like barcodes, but squarer!",
		component: QRcode,
	},
	{
		id: "sorting",
		path: "/tools/sorting",
		title: "Sorting",
		description: "Sort arrays like a boss.",
		component: Sorting,
	},
	{
		id: "blog",
		path: "/resource/blog",
		title: "Blog",
		description: "Feast your eyes on our riveting reads.",
		component: Blog,
	},
	{
		id: "book",
		path: "/resource/book",
		title: "Book",
		description: "Dive into our library of literary treasures.",
		component: Book,
	},
	{
		id: "course",
		path: "/resource/course",
		title: "Course",
		description: "Learn new tricks without any Hogwarts tuition fees.",
		component: Course,
	},
	{
		id: "designsystem",
		path: "/resource/design-system",
		title: "Design System",
		description: "Marvel at the methods behind our design madness.",
		component: DesignSystem,
	},
	{
		id: "github",
		path: "/resource/github",
		title: "Github",
		description: "Peek at our code in its natural habitat.",
		component: Github,
	},
	{
		id: "icon",
		path: "/resource/icon",
		title: "Icon",
		description: "Icons galore! Pick 'em, use 'em, love 'em.",
		component: Icon,
	},
	{
		id: "interview",
		path: "/resource/interview",
		title: "Interview",
		description: "O(n!) to 0(1)",
		component: Interview,
	},
	{
		id: "movie",
		path: "/resource/movie",
		title: "Movie",
		description: "Roll out the red carpet for our movie collection.",
		component: Movie,
	},
	{
		id: "platform",
		path: "/resource/platform",
		title: "Platform",
		description: "Step up to our platform of choice resources.",
		component: Platform,
	},
	{
		id: "plugin",
		path: "/resource/plugin",
		title: "Plugin",
		description: "Plugins to power up your projects.",
		component: Plugin,
	},
	{
		id: "tool",
		path: "/resource/tool",
		title: "Tool",
		description: "Tools of the trade to make your work a breeze.",
		component: Tool,
	},
	{
		id: "tvseries",
		path: "/resource/tv-series",
		title: "TV Series",
		description: "Get comfy with our collection of binge-worthy TV series.",
		component: TvSeries,
	},
	{
		id: "uiux",
		path: "/resource/ui-ux",
		title: "UI/UX",
		description: "Feast your eyes on the finest UI/UX resources.",
		component: UiUx,
	},
	{
		id: "youtube",
		path: "/resource/youtube",
		title: "Youtube",
		description: "Dive into our YouTube video vault.",
		component: YouTube,
	},
	{
		id: "editor",
		path: "/markdown/me",
		title: "Editor",
		description: "Markdown Editor - for words that mark the spot.",
		component: MarkdownEditor,
	},
	{
		id: "table",
		path: "/markdown/md-table-generator",
		title: "Table",
		description: "Create tables that would make any spreadsheet jealous.",
		component: TableGenerator,
	},
	{
		id: "tableofcontent",
		path: "/markdown/toc",
		title: "Table Of Content",
		description:
			"Organize your thoughts with a click, courtesy of our TOC.",
		component: TableOfContent,
	},
	{
		id: "texteditor",
		path: "/text/te",
		title: "Text Editor",
		description: "For those who love to play with words.",
		component: TextEditor,
	},
	{
		id: "mimetype",
		path: "/information/mimetype",
		title: "Mimetype",
		description: "Find out what type your file fancies itself as.",
		component: Mimetype,
	},
	{
		id: "npmpackages",
		path: "/information/npm-packages",
		title: "Npm Packages",
		description:
			"Unleash your inner Newton of Node. Who said npm packages can't be thrilling?",
		component: Npmpackages,
	},
	{
		id: "diagramming",
		path: "/tools/diagramming",
		title: "Diagramming",
		description:
			"Channel your inner Da Vinci of diagrams. Who said flowcharts can't be art?",
		component: Diagramming,
	},
	{
		id: "diffchecker",
		path: "/tools/textdiff",
		title: "Diffchecker",
		description:
			"Ever wondered what’s different? We did too! Play spot the difference with text.",
		component: Diffchecker,
	},
	{
		id: "creategithubissue",
		path: "/automation-scripts/create-github-issue",
		title: "Create Github Issue",
		description: "Create Github Issue",
		component: PageNotFound,
	},
	{
		id: "/",
		path: "/",
		title: "BinaryTree: Developer Productivity Tools",
		description:
			"At binarytree.dev, we offer an array of developer productivity tools to help you save time. With 16 ever-growing features, our platform evolves to meet your needs.",
		component: Home,
	},
	{
		id: "about",
		path: "/about",
		title: "About",
		description: "All the juicy details about us.",
		component: About,
	},
	{
		id: "feedback",
		path: "/feedback",
		title: "Feedback",
		description: "We're all ears for your cheers or jeers.",
		component: Feedback,
	},
	{
		id: "terms",
		path: "/terms",
		title: "Terms",
		description: "Terms",
		component: Terms,
	},
	{
		id: "privacypolicy",
		path: "/privacy-policy",
		title: "Privacy Policy",
		description: "Privacy Policy",
		component: PrivacyPolicy,
	},
	{
		id: "cookiepolicy",
		path: "/cookie-policy",
		title: "Cookie Policy",
		description: "Cookie Policy",
		component: CookiePolicy,
	},
	{
		id: "pagenotfound",
		path: "*",
		title: "Page Not Found",
		description: "Page Not Found",
		component: PageNotFound,
	},
];

export const routesById = routes.reduce((acc, route) => {
	acc[route.id] = route;
	return acc;
}, {} as Record<RouteId, Route>);
