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

const IN_DEV = import.meta.env.DEV;

const MENU_ITEMS = [
	{
		name: "Colors",
		icon: <Brush size={16} />,
		show: true,
		children: [
			{
				name: "Color Picker",
				url: "/colors/cp",
				icon: <Baseline size={16} />,
				show: true,
			},
			{
				name: "Shade Generator",
				url: "/colors/shades",
				icon: <Layers size={16} />,
				show: IN_DEV,
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
				url: "/markdown/me",
				icon: <FileEdit size={16} />,
				show: true,
			},
			{
				name: "Table Of Content",
				url: "/markdown/toc",
				icon: <Table size={16} />,
				show: true,
			},
			{
				name: "MD Table Generator",
				url: "/markdown/md-table-generator",
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
				name: "Image Generator From Colors",
				url: "/data/igfc",
				icon: <Image size={16} />,
				show: true,
			},
			{
				name: "Data Generator",
				url: "/data/data-gen",
				icon: <DatabaseBackup size={16} />,
				show: true,
			},
			{
				name: "Sorting",
				url: "/data/sorting",
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
				url: "/converter/base-64",
				icon: <Replace size={16} />,
				show: true,
			},
			{
				name: "Pixel Converter",
				url: "/converter/pixel-converter",
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
				url: "/text/te",
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
				url: "/list/icons",
				icon: <ClipboardEdit size={16} />,
				show: true,
			},
			{
				name: "Channel",
				url: "/list/youtube-channels",
				icon: <Youtube size={16} />,
				show: IN_DEV,
			},
			{
				name: "Github Repo",
				url: "/list/github-repos",
				icon: <Github size={16} />,
				show: IN_DEV,
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
