import { MenuProps } from "antd";
import { IconName } from "components/General/Icon/utils/types";
import { getItem } from "components/Layouts/Menu/utils/helper";

const IN_DEVELOPMENT = import.meta.env.DEV;

export const MENU_ITEMS = [
	{
		name: "Newsfeed",
		icon: "Newspaper",
		show: true,
		children: [
			{
				name: "News",
				url: "/newsfeed",
				icon: "Mailbox",
				show: true,
			},
		],
	},
	{
		name: "Colors",
		icon: "Brush",
		show: true,
		children: [
			{
				name: "Color Picker",
				url: "/colors/cp",
				icon: "Baseline",
				show: true,
			},
			{
				name: "Shades & Tints",
				url: "/colors/shades-tints",
				icon: "Layers",
				show: true,
			},
		],
	},
	{
		name: "CSS",
		icon: "Code",
		show: true,
		children: [
			{
				name: "Border Radius",
				url: "/css/br",
				icon: "Square",
				show: true,
			},
			{
				name: "Box Shadow",
				url: "/css/bs",
				icon: "Box",
				show: IN_DEVELOPMENT,
			},
			{
				name: "Svg Formatter",
				url: "/css/svg-formatter",
				icon: "Command",
				show: true,
			},
		],
	},
	{
		name: "Converter",
		icon: "Repeat",
		show: true,
		children: [
			{
				name: "Base64",
				url: "/converter/base-64",
				icon: "Replace",
				show: true,
			},
			{
				name: "Pixel",
				url: "/converter/pixel",
				icon: "FileOutput",
				show: true,
			},
			{
				name: "JSON To TypeScript",
				url: "/converter/jtt",
				icon: "FileOutput",
				show: true,
			},
		],
	},
	{
		name: "Generator",
		icon: "Database",
		show: true,
		children: [
			{
				name: "Data",
				url: "/generator/data",
				icon: "DatabaseBackup",
				show: true,
			},
			{
				name: "Image",
				url: "/generator/igfc",
				icon: "Image",
				show: true,
			},
			{
				name: "Avatar",
				url: "/generator/avatar",
				icon: "BadgeHelp",
				show: true,
			},
			{
				name: "QR Code",
				url: "/generator/qrcode",
				icon: "QrCode",
				show: true,
			},
			{
				name: "Sorting",
				url: "/generator/sorting",
				icon: "ArrowUpNarrowWide",
				show: true,
			},
		],
	},
	{
		name: "Markdown",
		icon: "Code2",
		show: true,
		children: [
			{
				name: "Editor",
				url: "/markdown/me",
				icon: "FileEdit",
				show: true,
			},
			{
				name: "Table",
				url: "/markdown/md-table-generator",
				icon: "Dice5",
				show: true,
			},
			{
				name: "Table Of Content",
				url: "/markdown/toc",
				icon: "Table",
				show: true,
			},
		],
	},
	{
		name: "Text",
		icon: "Pencil",
		show: true,
		children: [
			{
				name: "Text Editor",
				url: "/text/te",
				icon: "ClipboardEdit",
				show: true,
			},
		],
	},
	{
		name: "Information",
		icon: "BadgeInfo",
		show: true,
		children: [
			{
				name: "Mimetype",
				url: "/information/mimetype",
				icon: "ArrowLeftRight",
				show: true,
			},
		],
	},
	{
		name: "Resource",
		icon: "List",
		show: true,
		children: [
			{
				name: "Blog",
				url: "/resource/blog",
				icon: "Keyboard",
				show: true,
			},
			{
				name: "Book",
				url: "/resource/book",
				icon: "BookOpen",
				show: true,
			},
			{
				name: "Course",
				url: "/resource/course",
				icon: "GraduationCap",
				show: true,
			},
			{
				name: "Design System",
				url: "/resource/design-system",
				icon: "LayoutDashboard",
				show: true,
			},
			{
				name: "Github",
				url: "/resource/github",
				icon: "Github",
				show: true,
			},
			{
				name: "Icon",
				url: "/resource/icon",
				icon: "Square",
				show: true,
			},
			{
				name: "Movie",
				url: "/resource/movie",
				icon: "Clapperboard",
				show: true,
			},
			{
				name: "Platform",
				url: "/resource/platform",
				icon: "Server",
				show: true,
			},
			{
				name: "Plugin",
				url: "/resource/plugin",
				icon: "Plug",
				show: true,
			},
			{
				name: "Tool",
				url: "/resource/tool",
				icon: "Wrench",
				show: true,
			},
			{
				name: "TV Series",
				url: "/resource/tv-series",
				icon: "Tv",
				show: true,
			},
			{
				name: "UI/UX",
				url: "/resource/ui-ux",
				icon: "Brush",
				show: true,
			},
			{
				name: "Youtube",
				url: "/resource/youtube",
				icon: "Youtube",
				show: true,
			},
		],
	},
];

const ITEMS: MenuProps["items"] = [
	...MENU_ITEMS.filter((rootItem) => rootItem.show).map((item) => {
		return getItem(
			item.name,
			item.name as React.Key,
			item.icon as IconName,
			item.children.length > 0
				? item.children
						.filter((childItem) => childItem.show)
						.map((child) =>
							getItem(
								child.name,
								child.url as React.Key,
								child.icon as IconName
							)
						)
				: undefined
		);
	}),
];

export { ITEMS };
