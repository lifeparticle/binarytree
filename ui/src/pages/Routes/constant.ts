interface Route {
	path: string;
	title: string;
}

const ROUTES: Route[] = [
	{
		path: "/",
		title: "Dashboard",
	},
	{
		path: "/data/sorting",
		title: "Sorting",
	},
	{
		path: "/markdown/me",
		title: "Markdown Editor",
	},
	{
		path: "/data/igfc",
		title: "Image Generator From Colors",
	},
	{
		path: "/text/te",
		title: "Text Editor",
	},
	{
		path: "/data/data-gen",
		title: "Data Generator",
	},
	{
		path: "/colors/cp",
		title: "Color Picker",
	},
	{
		path: "/converter/base-64",
		title: "Base64",
	},
	{
		path: "/colors/shades",
		title: "Shades",
	},
	{
		path: "/converter/pixel-converter",
		title: "Pixel Converter",
	},
	{
		path: "/markdown/toc",
		title: "Table Of Content",
	},
	{
		path: "/markdown/md-table-generator",
		title: "Markdown Table Generator",
	},
	{
		path: "/list/icon",
		title: "Icon",
	},
	{
		path: "/list/youtube",
		title: "Youtube",
	},
	{
		path: "/list/github",
		title: "Github",
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
		path: "/list/movie",
		title: "Movie",
	},
	{
		path: "/list/tv-series",
		title: "TV Series",
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
		path: "*",
		title: "Page Not Found",
	},
];

export { ROUTES };
