import { MenuProps } from "antd";
import React from "react";
import { ResponsiveDropdownButton } from "../FormComponents";
import Icon from "../Icon";
import { DropdownDownloadButtonPropsType } from "./utils/types";
const imageType = {
	jpeg: ".jpeg",
	png: ".png",
};

const DropdownDownloadButton: React.FC<DropdownDownloadButtonPropsType> = ({
	handleDownload,
}) => {
	const handleMenuClick: MenuProps["onClick"] = (e) => {
		handleDownload(e.key);
	};

	const items: MenuProps["items"] = [
		{
			label: "Download JPEG",
			key: imageType.jpeg,
		},
		{
			label: "Download PNG",
			key: imageType.png,
		},
	];

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<ResponsiveDropdownButton
			menu={menuProps}
			icon={<Icon name="ChevronDown" />}
			placement="top"
			onClick={() => handleDownload(imageType.png)}
		>
			Download
		</ResponsiveDropdownButton>
	);
};

export default DropdownDownloadButton;
