import { useState } from "react";
import { createStyles, Navbar, Group, Button } from "@mantine/core";
import {
	IconPlayCard,
	IconColorPicker,
	IconMarkdown,
	IconBoxPadding,
	IconWindmill,
	IconFileText,
	IconDatabase,
	IconTextPlus,
	IconCalculator,
	IconTable,
} from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: "flex",
			alignItems: "center",
			textDecoration: "none",
			fontSize: theme.fontSizes.sm,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[1]
					: theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color: theme.colorScheme === "dark" ? theme.white : theme.black,

				[`& .${icon}`]: {
					color:
						theme.colorScheme === "dark"
							? theme.white
							: theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[2]
					: theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			"&, &:hover": {
				backgroundColor: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).color,
				[`& .${icon}`]: {
					color: theme.fn.variant({
						variant: "light",
						color: theme.primaryColor,
					}).color,
				},
			},
		},
	};
});

const data = [
	{ link: "/", label: "Image Generator From Colors", icon: IconWindmill },
	{ link: "/cp", label: "Color Picker", icon: IconColorPicker },
	{ link: "/me", label: "Markdown Editor", icon: IconMarkdown },
	{ link: "/te", label: "Text Editor", icon: IconFileText },
	{ link: "/icons", label: "Icons", icon: IconBoxPadding },
	{ link: "/data_gen", label: "Data Generator", icon: IconDatabase },
	{ link: "/base64", label: "Base 64 Converter", icon: IconTextPlus },
	{
		link: "/pixel_converter",
		label: "Pixel Converter",
		icon: IconCalculator,
	},
	{
		link: "/md_table_generator",
		label: "MD Table Generator",
		icon: IconTable,
	},
];

interface NavigationProps {
	value: string;
	toggle: any;
}

const Navigation: React.FC<NavigationProps> = ({ value, toggle }) => {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState("Billing");

	const links = data.map((item) => (
		<Link
			className={cx(classes.link, {
				[classes.linkActive]: item.label === active,
			})}
			to={item.link}
			key={item.label}
			onClick={(event) => {
				setActive(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</Link>
	));

	return (
		<Navbar width={{ sm: 300 }} p="md">
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<IconPlayCard size={28} />
					<Button color={value} onClick={() => toggle()}>
						{value}
					</Button>
				</Group>
				{links}
			</Navbar.Section>
		</Navbar>
	);
};

export default Navigation;
