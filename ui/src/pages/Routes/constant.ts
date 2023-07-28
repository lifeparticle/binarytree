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
		path: "/sorting",
		title: "Sorting",
	},
	{
		path: "/me",
		title: "Markdown Editor",
	},
	{
		path: "/igfc",
		title: "Image Generator From Colors",
	},
	{
		path: "/te",
		title: "Text Editor",
	},
	{
		path: "/data_gen",
		title: "Data Generator",
	},
	{
		path: "/cp",
		title: "Color Picker",
	},
	{
		path: "/base_64",
		title: "Base64",
	},
	{
		path: "/shades",
		title: "Shades",
	},
	{
		path: "/pixel_converter",
		title: "Pixel Converter",
	},
	{
		path: "/toc",
		title: "Table Of Content",
	},
	{
		path: "/md_table_generator",
		title: "Markdown Table Generator",
	},
	{
		path: "/icons",
		title: "Icons",
	},
	{
		path: "/youtube_channels",
		title: "Channel",
	},
	{
		path: "/github_repos",
		title: "Github Repository",
	},
	{
		path: "*",
		title: "Page Not Found",
	},
];

export { ROUTES };
