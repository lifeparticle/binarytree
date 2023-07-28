import { lazy } from "react";

export const News = lazy(() => import("pages/News"));
export const Sorting = lazy(() => import("pages/Sorting"));
export const MarkdownEditor = lazy(() => import("pages/MarkdownEditor"));
export const ImageGeneratorFromColors = lazy(
	() => import("pages/ImageGeneratorFromColors")
);
export const TextEditor = lazy(() => import("pages/TextEditor"));
export const DataGenerator = lazy(() => import("pages/DataGenerator"));
export const ColorPicker = lazy(() => import("pages/ColorPicker"));
export const Base64 = lazy(() => import("pages/Base64"));
export const PixelConverter = lazy(() => import("pages/PixelConverter"));
export const TableOfContent = lazy(() => import("pages/TableOfContent"));
export const Shades = lazy(() => import("pages/Shades"));
export const TableGenerator = lazy(() => import("pages/MdTableGenerator"));
export const IconList = lazy(() => import("pages/IconList"));
export const YouTubeList = lazy(() => import("pages/YouTubeList"));
export const GithubList = lazy(() => import("pages/GithubList"));
