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
		path: "/colors/shades",
		title: "Shades",
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
		path: "/data/data-gen",
		title: "Data Generator",
	},
	{
		path: "/data/igfc",
		title: "Image Generator From Colors",
	},
	{
		path: "/data/sorting",
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
		path: "*",
		title: "Page Not Found",
	},
];

export { ROUTES };
