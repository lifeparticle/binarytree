import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";

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

const Routes = () => {
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Suspense fallback={<div>Loading...</div>}>
				<RRDRoutes>
					News
					<Route path="/" element={<News />} />
					<Route
						path="/igfc"
						element={<ImageGeneratorFromColors />}
					/>
					<Route path="/sorting" element={<Sorting />} />
					<Route path="/cp" element={<ColorPicker />} />
					<Route path="/me" element={<MarkdownEditor />} />
					<Route path="/te" element={<TextEditor />} />
					<Route path="/icons" element={<IconList />} />
					<Route path="/github_repos" element={<GithubList />} />
					<Route path="/youtube_channels" element={<YouTubeList />} />
					<Route path="/data_gen" element={<DataGenerator />} />
					<Route path="/base_64" element={<Base64 />} />
					<Route path="/shades" element={<Shades />} />
					<Route
						path="/pixel_converter"
						element={<PixelConverter />}
					/>
					<Route path="/toc" element={<TableOfContent />} />
					<Route
						path="/md_table_generator"
						element={<TableGenerator />}
					/>
					<Route path="*" element={<Navigate to="/404" />} />
				</RRDRoutes>
			</Suspense>
		</ErrorBoundary>
	);
};

export default Routes;
