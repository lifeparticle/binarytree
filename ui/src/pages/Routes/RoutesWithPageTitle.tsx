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
	Icon,
	YouTube,
	Github,
	TvSeries,
	Movie,
	Course,
	Blog,
	Book,
	Plugin,
	Tool,
} from "pages/pages";
import withPageTitle from "components/Hoc/withPageTitle";
import Text from "components/General/Text/Text";
import { API_LOADING } from "lib/utils/constant";

const Routes: React.FC = () => {
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Suspense fallback={<Text text={API_LOADING} />}>
				<RRDRoutes>
					<Route path="/" element={<News />} />
					<Route path="/data">
						<Route index element={<Navigate to={"igfc"} />} />
						<Route
							path="igfc"
							element={<ImageGeneratorFromColors />}
						/>
						<Route path="data-gen" element={<DataGenerator />} />
						<Route path="sorting" element={<Sorting />} />
					</Route>
					<Route path="/markdown">
						<Route index element={<Navigate to={"me"} />} />
						<Route path="me" element={<MarkdownEditor />} />
						<Route path="toc" element={<TableOfContent />} />
						<Route
							path="md-table-generator"
							element={<TableGenerator />}
						/>
					</Route>
					<Route path="/colors">
						<Route index element={<Navigate to={"cp"} />} />
						<Route path="cp" element={<ColorPicker />} />
						<Route path="shades" element={<Shades />} />
					</Route>
					<Route path="/converter">
						<Route index element={<Navigate to={"base-64"} />} />

						<Route path="base-64" element={<Base64 />} />

						<Route
							path="pixel-converter"
							element={<PixelConverter />}
						/>
					</Route>
					<Route path="/text">
						<Route index element={<Navigate to={"base-64"} />} />

						<Route path="te" element={<TextEditor />} />
					</Route>
					<Route path="/list">
						<Route index element={<Navigate to={"icon"} />} />
						<Route path="blog" element={<Blog />} />
						<Route path="book" element={<Book />} />
						<Route path="course" element={<Course />} />
						<Route path="github" element={<Github />} />
						<Route path="icon" element={<Icon />} />
						<Route path="movie" element={<Movie />} />
						<Route path="plugin" element={<Plugin />} />
						<Route path="tool" element={<Tool />} />
						<Route path="tv-series" element={<TvSeries />} />
						<Route path="youtube" element={<YouTube />} />
					</Route>
					<Route path="*" element={<Navigate to="/404" />} />
				</RRDRoutes>
			</Suspense>
		</ErrorBoundary>
	);
};

const RoutesWithPageTitle = withPageTitle(Routes);
export default RoutesWithPageTitle;
