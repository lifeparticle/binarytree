import { useState } from "react";
import { createStyles, Navbar, Group } from "@mantine/core";
import Button from "components/Button";

import { Link } from "react-router-dom";
import logo from "logo.svg";

const useStyles = createStyles((theme, _params, getRef) => {
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: 1.5,
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

				[`& .`]: {
					color:
						theme.colorScheme === "dark"
							? theme.white
							: theme.black,
				},
			},
		},

		linkIcon: {
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
				[`& `]: {
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
	{ link: "/", label: "Image Generator From Colors" },
	{ link: "/sorting", label: "Sorting" },
	{ link: "/cp", label: "Color Picker" },
	{ link: "/me", label: "Markdown Editor" },
	{ link: "/te", label: "Text Editor" },
	{ link: "/icons", label: "Icons" },
	{ link: "/data_gen", label: "Data Generator" },
	{ link: "/base64", label: "Base 64 Converter" },
	{
		link: "/pixel_converter",
		label: "Pixel Converter",
	},
	{ link: "/toc", label: "Table Of Content" },
	{ link: "/shades", label: "Shade Generator" },
	{
		link: "/md_table_generator",
		label: "MD Table Generator",
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
			<span>{item.label}</span>
		</Link>
	));

	return (
		<Navbar width={{ sm: 300 }} p="md">
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<img src={logo} alt="logo" height={20} width={20} />
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
