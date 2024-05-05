import {
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
	Github,
	GithubIsuue,
	Home,
	Icon,
	ImageGeneratorFromColors,
	Interview,
	IPSubnet,
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
	ProgressiveWebApp,
	QRcode,
	ShadesAndTints,
	Sorting,
	Survey,
	Svg,
	TableGenerator,
	TableOfContent,
	Terms,
	TextEditor,
	Tool,
	TvSeries,
	UiUx,
	Units,
	Uuid,
	YouTube,
	FlexboxGenerator,
} from "pages";
import { FC } from "react";

export type RouteId =
	| "/"
	| "about"
	| "ai"
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
	| "csharpbuilder"
	| "data"
	| "designsystem"
	| "diagramming"
	| "diffchecker"
	| "docs"
	| "editor"
	| "feedback"
	| "fileconverter"
	| "flexboxgenerator"
	| "github"
	| "githubissue"
	| "icon"
	| "imagegeneratorfromcolors"
	| "interview"
	| "ipsubnet"
	| "jsontotypescript"
	| "mimetype"
	| "movie"
	| "newsfeed"
	| "npmpackages"
	| "pagenotfound"
	| "pixelconverter"
	| "platform"
	| "plugin"
	| "privacypolicy"
	| "progressivewebapp"
	| "qrcode"
	| "shadesandtints"
	| "sorting"
	| "survey"
	| "svg"
	| "table"
	| "tableofcontent"
	| "terms"
	| "texteditor"
	| "tool"
	| "tvseries"
	| "uiux"
	| "units"
	| "uuid"
	| "youtube";

interface Route {
	path: string;
	title: string;
	description: string;
	component: FC;
	id: RouteId;
}

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
		id: "flexboxgenerator",
		path: "/css/fg",
		title: "Flexbox Generator",
		description: "Arrange your item inside your container.",
		component: FlexboxGenerator,
	},
	{
		id: "units",
		path: "/css/units",
		title: "Units",
		description: "Join the CSS party with Pixels, Ems, Rems, and more.",
		component: Units,
	},
	{
		id: "svg",
		path: "/converter/svg",
		title: "SVG",
		description: "Get your SVGs in shipshape.",
		component: Svg,
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
		title: "Pixel - REM",
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
		id: "fileconverter",
		path: "/converter/fc",
		title: "File",
		description:
			"Your file, our recipe! We churn your files into new formats - it's 'file-flambé' minus the flames!",
		component: FileConverter,
	},
	{
		id: "codeformatter",
		path: "/tools/code-formatter",
		title: "Code Formatter",
		description:
			"Embrace your inner Picasso of Programming. Who said formatting code can't be a masterpiece?",
		component: CodeFormatter,
	},
	{
		id: "sorting",
		path: "/tools/sorting",
		title: "Sorting",
		description: "Sort arrays like a boss.",
		component: Sorting,
	},
	{
		id: "progressivewebapp",
		path: "/tools/pwa",
		title: "Progressive Web App",
		description: "Turn your website into a Progressive Web App.",
		component: ProgressiveWebApp,
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
		id: "imagegeneratorfromcolors",
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
		id: "csharpbuilder",
		path: "/generator/csharpbuilder",
		title: "C# Builder",
		description: "Build C# code with a few clicks.",
		component: CSharpBuilder,
	},
	{
		id: "uuid",
		path: "/generator/uuid",
		title: "UUID",
		description: "Generate UUIDs - the unique ID for your unique needs.",
		component: Uuid,
	},
	{
		id: "ai",
		path: "/resource/ai",
		title: "AI",
		description: "AI resources to make your projects smarter.",
		component: Ai,
	},
	{
		id: "blog",
		path: "/resource/blog",
		title: "Blogs",
		description: "Feast your eyes on our riveting reads.",
		component: Blog,
	},
	{
		id: "book",
		path: "/resource/book",
		title: "Books",
		description: "Dive into our library of literary treasures.",
		component: Book,
	},
	{
		id: "course",
		path: "/resource/course",
		title: "Courses",
		description: "Learn new tricks without any Hogwarts tuition fees.",
		component: Course,
	},
	{
		id: "designsystem",
		path: "/resource/design-system",
		title: "Design Systems",
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
		title: "Movies",
		description: "Roll out the red carpet for our movie collection.",
		component: Movie,
	},
	{
		id: "platform",
		path: "/resource/platform",
		title: "Platforms",
		description: "Step up to our platform of choice resources.",
		component: Platform,
	},
	{
		id: "plugin",
		path: "/resource/plugin",
		title: "Plugins",
		description: "Plugins to power up your projects.",
		component: Plugin,
	},
	{
		id: "survey",
		path: "/resource/survey",
		title: "Surveys",
		description: "Take a peek at the survey results.",
		component: Survey,
	},
	{
		id: "tool",
		path: "/resource/tool",
		title: "Tools",
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
		component: Editor,
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
		id: "docs",
		path: "/markdown/docs",
		title: "Docs",
		description: "Markdown Docs - for words that mark the spot.",
		component: Docs,
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
		id: "githubissue",
		path: "/automation/github-issue",
		title: "Create Github Issue",
		description:
			"CSV to Github issues? It's not magic, it's just wickedly smart",
		component: GithubIsuue,
	},
	{
		id: "ipsubnet",
		path: "/networking/ip-subnet",
		title: "IP Subnet",
		description: "IP subnetting made easy.",
		component: IPSubnet,
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
