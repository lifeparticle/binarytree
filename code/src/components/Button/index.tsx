import { ButtonProps as MantineButtonButtonProps } from "@mantine/core";
import { Button as MantineButton } from "@mantine/core";

interface ButtonProps {
	onClick?: any;
	component?: any;
	href?: any;
	target?: any;
}
const Button: React.FC<ButtonProps & MantineButtonButtonProps> = ({
	children,
	...props
}) => {
	return (
		<MantineButton
			{...props}
			styles={(theme) => ({
				root: {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark
							: "#228be6",
				},
			})}
		>
			{children}
		</MantineButton>
	);
};

export default Button;
