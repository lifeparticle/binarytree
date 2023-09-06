interface Route {
	path: string;
	title: string;
}

const ROUTES: Route[] = [
	{
		path: "/colors/cp",
		title: "Color Picker",
	},
	{
		path: "/colors/shades-tints",
		title: "Shades & Tints",
	},
	{
		path: "/css/br",
		title: "Border Radius",
	},
	{
		path: "/converter/base-64",
		title: "Base64",
	},
	{
		path: "/converter/pixel",
		title: "Pixel Converter",
	},
	{
		path: "/converter/jtt",
		title: "Json To Typescript Converter",
	},
	{
		path: "/generator/data",
		title: "Data Generator",
	},
	{
		path: "/generator/avatar",
		title: "Avatar Generator",
	},
	{
		path: "/generator/igfc",
		title: "Image Generator From Colors",
	},
	{
		path: "/generator/sorting",
		title: "Sorting",
	},
	{
		path: "/list/blog",
		title: "Blog",
	},
	{
		path: "/list/book",
		title: "Book",
	},
	{
		path: "/list/course",
		title: "Course",
	},
	{
		path: "/list/design-system",
		title: "Design System",
	},
	{
		path: "/list/github",
		title: "Github",
	},
	{
		path: "/list/icon",
		title: "Icon",
	},
	{
		path: "/list/movie",
		title: "Movie",
	},
	{
		path: "/list/platform",
		title: "Platform",
	},
	{
		path: "/list/plugin",
		title: "Plugin",
	},
	{
		path: "/list/tool",
		title: "Tool",
	},
	{
		path: "/list/tv-series",
		title: "TV Series",
	},
	{
		path: "/list/ui-ux",
		title: "UI/UX",
	},
	{
		path: "/list/youtube",
		title: "Youtube",
	},
	{
		path: "/markdown/me",
		title: "Markdown Editor",
	},
	{
		path: "/markdown/md-table-generator",
		title: "Markdown Table Generator",
	},
	{
		path: "/markdown/toc",
		title: "Table Of Content",
	},
	{
		path: "/text/te",
		title: "Text Editor",
	},
	{
		path: "/",
		title: "Dashboard",
	},
	{
		path: "/about",
		title: "About",
	},
	{
		path: "/feedback",
		title: "Feedback",
	},
	{
		path: "*",
		title: "Page Not Found",
	},
];

export { ROUTES };
