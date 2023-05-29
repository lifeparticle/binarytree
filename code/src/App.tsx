import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

import Navigation from "./pages/Navigation";
import "App.scss";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Sorting from "pages/Sorting";
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

const { Header, Sider, Content } = Layout;

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ background: colorBgContainer }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Navigation />
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					<Suspense fallback={<div>Loading...</div>}>
						<div>
							<Routes>
								<Route
									path="/"
									element={<ImageGeneratorFromColors />}
								/>
								<Route path="/sorting" element={<Sorting />} />
								<Route path="/cp" element={<ColorPicker />} />
								<Route
									path="/me"
									element={<MarkdownEditor />}
								/>
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
								<Route
									path="/toc"
									element={<TableOfContent />}
								/>
								<Route
									path="/md_table_generator"
									element={<TableGenerator />}
								/>
							</Routes>
						</div>
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
