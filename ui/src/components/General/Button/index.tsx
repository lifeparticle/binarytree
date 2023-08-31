import React from "react";
import { Button as AntButton } from "antd";
import useGetSize from "lib/utils/hooks/useGetSize";

interface ButtonPropsType {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	icon?: React.ReactNode;
}

const Button: React.FC<ButtonPropsType> = ({ children, ...props }) => {
	const { size } = useGetSize();

	return (
		<AntButton size={size} {...props}>
			{children}
		</AntButton>
	);
};

export default Button;
