import { Dropdown } from "antd";
import React from "react";
import { withSize } from "components/Hoc";
import { DropdownButtonProps } from "antd/es/dropdown";

const DropdownButton: React.FC<DropdownButtonProps> = ({
	children,
	...props
}) => {
	return <Dropdown.Button {...props}>{children}</Dropdown.Button>;
};

const ResponsiveDropdownButton = withSize(DropdownButton);
export default ResponsiveDropdownButton;
