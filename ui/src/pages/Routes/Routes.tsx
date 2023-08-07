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
} from "pages/pages";

const Routes = () => {
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Suspense fallback={<div>Loading...</div>}>
				<RRDRoutes>
					News
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
						<Route index element={<Navigate to={"icons"} />} />

						<Route path="icons" element={<Icon />} />
						<Route path="github-repos" element={<Github />} />
						<Route path="youtube-channels" element={<YouTube />} />
					</Route>
					<Route path="*" element={<Navigate to="/404" />} />
				</RRDRoutes>
			</Suspense>
		</ErrorBoundary>
	);
};

export default Routes;
