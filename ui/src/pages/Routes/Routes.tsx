import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useRoutes } from "react-router-dom";

import {
	News,
	Sorting,
	MarkdownEditor,
	ImageGeneratorFromColors,
	TextEditor,
	DataGenerator,
	ColorPicker,
	Base64,
	PixelConverter,
	TableOfContent,
	Shades,
	TableGenerator,
	IconList,
	YouTubeList,
	GithubList,
} from "pages/pages";

interface Route {
	path: string;
	element: ReactNode;
	title: string;
}

export const ROUTES: Route[] = [
	{
		path: "/",
		element: <News />,
		title: "Dashboard",
	},
	{
		path: "/sorting",
		element: <Sorting />,
		title: "Sorting",
	},
	{
		path: "/me",
		element: <MarkdownEditor />,
		title: "Markdown Editor",
	},
	{
		path: "/igfc",
		element: <ImageGeneratorFromColors />,
		title: "Image Generator From Colors",
	},
	{
		path: "/te",
		element: <TextEditor />,
		title: "Text Editor",
	},
	{
		path: "/data_gen",
		element: <DataGenerator />,
		title: "Data Generator",
	},
	{
		path: "/cp",
		element: <ColorPicker />,
		title: "Color Picker",
	},
	{
		path: "/base_64",
		element: <Base64 />,
		title: "Base64",
	},
	{
		path: "/shades",
		element: <Shades />,
		title: "Shades",
	},
	{
		path: "/pixel_converter",
		element: <PixelConverter />,
		title: "Pixel Converter",
	},
	{
		path: "/toc",
		element: <TableOfContent />,
		title: "Table Of Content",
	},
	{
		path: "/md_table_generator",
		element: <TableGenerator />,
		title: "Markdown Table Generator",
	},
	{
		path: "/icons",
		element: <IconList />,
		title: "Icons",
	},
	{
		path: "/youtube_channels",
		element: <YouTubeList />,
		title: "Channel",
	},
	{
		path: "/github_repos",
		element: <GithubList />,
		title: "Github Repository",
	},
	{
		path: "*",
		element: <Navigate to="/404" />,
		title: "Page Not Found",
	},
];

const Routes = () => {
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Suspense fallback={<div>Loading...</div>}>
				{useRoutes(ROUTES)}
			</Suspense>
		</ErrorBoundary>
	);
};

export default Routes;
