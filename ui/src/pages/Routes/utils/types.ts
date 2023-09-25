type RouteId =
	| "/"
	| "about"
	| "avatar"
	| "base64"
	| "blog"
	| "book"
	| "borderradius"
	| "boxshadow"
	| "colorpicker"
	| "course"
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

export type { Route, RouteId };
