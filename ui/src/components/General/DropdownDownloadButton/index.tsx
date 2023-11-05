import React from "react";
import { Icon, ResponsiveDropdownButton } from "components/General";
import { MenuProps } from "antd";

const IMAGE_TYPE = {
	jpeg: ".jpeg",
	png: ".png",
};

const items: MenuProps["items"] = [
	{
		label: "Download JPEG",
		key: IMAGE_TYPE.jpeg,
	},
	{
		label: "Download PNG",
		key: IMAGE_TYPE.png,
	},
];

interface DropdownDownloadButtonProps {
	handleDownload: (val: string) => void;
}

const DropdownDownloadButton: React.FC<DropdownDownloadButtonProps> = ({
	handleDownload,
}) => {
	return (
		<ResponsiveDropdownButton
			menu={{
				items,
				onClick: (e) => {
					handleDownload(e.key);
				},
			}}
			icon={<Icon name="ChevronDown" />}
			placement="top"
			onClick={() => handleDownload(IMAGE_TYPE.png)}
		>
			Download
		</ResponsiveDropdownButton>
	);
};

export default DropdownDownloadButton;
