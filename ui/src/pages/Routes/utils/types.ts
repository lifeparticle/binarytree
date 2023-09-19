type RouteId =
	| "newsfeed"
	| "colorpicker"
	| "shadesandtints"
	| "borderradius"
	| "boxshadow"
	| "svgformatter"
	| "base64"
	| "pixelconverter"
	| "jsontotypescript"
	| "data"
	| "avatar"
	| "image"
	| "qrcode"
	| "sorting"
	| "blog"
	| "book"
	| "course"
	| "designsystem"
	| "github"
	| "icon"
	| "movie"
	| "platform"
	| "plugin"
	| "tool"
	| "tvseries"
	| "uiux"
	| "youtube"
	| "editor"
	| "table"
	| "tableofcontent"
	| "texteditor"
	| "mimetype"
	| "diffchecker"
	| "/"
	| "about"
	| "feedback"
	| "pagenotfound";

interface Route {
	path: string;
	title: string;
	description: string;
	component: React.FC;
	id: RouteId;
}

export type { Route, RouteId };
