import React from "react";
import { withSize } from "components/Hoc";
import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/es/button";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <AntButton {...props}>{children}</AntButton>;
};

const ResponsiveButton = withSize(Button);
export default ResponsiveButton;
