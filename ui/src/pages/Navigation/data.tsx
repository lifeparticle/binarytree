import {
	AlignEndHorizontal,
	ArrowUpNarrowWide,
	Baseline,
	BookCopy,
	Brush,
	ClipboardEdit,
	Code2,
	Database,
	DatabaseBackup,
	Dice5,
	FileEdit,
	FileOutput,
	Image,
	Newspaper,
	Pencil,
	Repeat,
	Replace,
	Table,
} from "lucide-react";

import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

export const items: MenuProps["items"] = [
	getItem("Colors", "colors", <Brush size={16} />, [
		getItem("Color Picker", "/cp", <Baseline size={16} />),
		// getItem("Shade Generator", "/shades", <Layers size={16} />),
	]),
	getItem("Markdown", "markdown", <Code2 size={16} />, [
		getItem("Markdown Editor", "/me", <FileEdit size={16} />),
		getItem("Table Of Content", "/toc", <Table size={16} />),
		getItem(
			"MD Table Generator",
			"/md_table_generator",
			<Dice5 size={16} />
		),
	]),
	getItem("Data", "data", <Database size={16} />, [
		getItem("Data Generator", "/data_gen", <DatabaseBackup size={16} />),
		getItem("Image Generator From Colors", "/", <Image size={16} />),
		getItem("Sorting", "/sorting", <ArrowUpNarrowWide size={16} />),
	]),
	getItem("Converter", "converter", <Repeat size={16} />, [
		getItem("Base 64 Converter", "/base_64", <Replace size={16} />),
		getItem(
			"Pixel Converter",
			"/pixel_converter",
			<FileOutput size={16} />
		),
	]),
	getItem("Editor", "text", <Pencil size={16} />, [
		getItem("Text Editor", "/te", <ClipboardEdit size={16} />),
	]),
	getItem("Icons", "icons", <AlignEndHorizontal size={16} />, [
		getItem("Icons", "/icons"),
	]),
	getItem("News", "news", <BookCopy size={16} />, [
		getItem("Daily News", "/news", <Newspaper size={16} />),
	]),
];
