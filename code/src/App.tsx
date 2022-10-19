import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Navigation from "./pages/Navigation";
import "App.scss";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const ColorPicker = lazy(() => import("pages/ColorPicker"));
const ImageGeneratorFromColors = lazy(
	() => import("pages/ImageGeneratorFromColors")
);
const MarkdownEditor = lazy(() => import("pages/MarkdownEditor"));
const Icons = lazy(() => import("pages/Icons"));
const TextEditor = lazy(() => import("pages/TextEditor"));
const DataGenerator = lazy(() => import("pages/DataGenerator"));
const Base64 = lazy(() => import("pages/Base64"));
const PixelConverter = lazy(() => import("pages/PixelConverter"));
const TableOfContent = lazy(() => import("pages/TableOfContent"));
const Shades = lazy(() => import("pages/Shades"));
const TableGenerator = lazy(() => import("pages/MdTableGenerator"));

function App() {
	const [value, toggle] = useToggle<"dark" | "light">(["dark", "light"]);
	return (
		<MantineProvider theme={{ colorScheme: value }}>
			<AppShell
				padding="md"
				navbar={<Navigation value={value} toggle={toggle} />}
				header={
					<Header height={60} p="xs">
						{/* Header content */}
					</Header>
				}
				styles={(theme) => ({
					main: {
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				})}
			>
				<Suspense fallback={<div>Loading...</div>}>
					<div>
						<Routes>
							<Route
								path="/"
								element={<ImageGeneratorFromColors />}
							/>
							<Route path="/cp" element={<ColorPicker />} />
							<Route path="/me" element={<MarkdownEditor />} />
							<Route path="/te" element={<TextEditor />} />
							<Route path="/icons" element={<Icons />} />
							<Route
								path="/data_gen"
								element={<DataGenerator />}
							/>
							<Route path="/base64" element={<Base64 />} />
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
						</Routes>
					</div>
				</Suspense>
			</AppShell>
		</MantineProvider>
	);
}

export default App;
