import { MenuProps } from "antd";
import {
	AlignEndHorizontal,
	ArrowUpNarrowWide,
	Baseline,
	Brush,
	ClipboardEdit,
	Code2,
	Database,
	DatabaseBackup,
	Dice5,
	FileEdit,
	FileOutput,
	Github,
	Image,
	Layers,
	Pencil,
	Repeat,
	Replace,
	Table,
	Youtube,
} from "lucide-react";

const MENU_ITEMS = [
	{
		name: "Colors",
		icon: <Brush size={16} />,
		show: true,
		children: [
			{
				name: "Color Picker",
				url: "/cp",
				icon: <Baseline size={16} />,
				show: true,
			},
			{
				name: "Shade Generator",
				url: "/shades",
				icon: <Layers size={16} />,
				show: false,
			},
		],
	},
	{
		name: "Markdown",
		icon: <Code2 size={16} />,
		show: true,
		children: [
			{
				name: "Markdown Editor",
				url: "/me",
				icon: <FileEdit size={16} />,
				show: true,
			},
			{
				name: "Table Of Content",
				url: "/toc",
				icon: <Table size={16} />,
				show: true,
			},
			{
				name: "MD Table Generator",
				url: "/md_table_generator",
				icon: <Dice5 size={16} />,
				show: true,
			},
		],
	},
	{
		name: "Data",
		icon: <Database size={16} />,
		show: true,
		children: [
			{
				name: "Data Generator",
				url: "/data_gen",
				icon: <DatabaseBackup size={16} />,
				show: true,
			},
			{
				name: "Image Generator From Colors",
				url: "/igfc",
				icon: <Image size={16} />,
				show: true,
			},
			{
				name: "Sorting",
				url: "/sorting",
				icon: <ArrowUpNarrowWide size={16} />,
				show: true,
			},
		],
	},
	{
		name: "Converter",
		icon: <Repeat size={16} />,
		show: true,
		children: [
			{
				name: "Base 64 Converter",
				url: "/base_64",
				icon: <Replace size={16} />,
				show: true,
			},
			{
				name: "Pixel Converter",
				url: "/pixel_converter",
				icon: <FileOutput size={16} />,
				show: true,
			},
		],
	},
	{
		name: "Text",
		icon: <Pencil size={16} />,
		show: true,
		children: [
			{
				name: "Text Editor",
				url: "/te",
				icon: <ClipboardEdit size={16} />,
				show: true,
			},
		],
	},
	{
		name: "List",
		icon: <AlignEndHorizontal size={16} />,
		show: true,
		children: [
			{
				name: "Icons",
				url: "/icons",
				icon: <ClipboardEdit size={16} />,
				show: true,
			},
			{
				name: "Channel",
				url: "/youtube-channel",
				icon: <Youtube size={16} />,
				show: true,
			},
			{
				name: "Github Repo",
				url: "/github-repo",
				icon: <Github size={16} />,
				show: true,
			},
		],
	},
];

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

const ITEMS: MenuProps["items"] = [
	{ type: "divider" },
	...MENU_ITEMS.filter((rootItem) => rootItem.show).map((item) => {
		return getItem(
			item.name,
			item.name as React.Key,
			item.icon,
			item.children
				.filter((item) => item.show)
				.map((child) =>
					getItem(child.name, child.url as React.Key, child.icon)
				)
		);
	}),
];

export { ITEMS };
