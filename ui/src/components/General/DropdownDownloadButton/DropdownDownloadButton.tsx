import React, { useState } from "react";
import { Icon, ResponsiveDropdownButton } from "components/General";
import { MenuProps } from "antd";

const IMAGE_TYPE = {
	jpeg: "jpeg",
	png: "png",
};

const formatLabelMap = {
	[IMAGE_TYPE.jpeg]: "JPEG",
	[IMAGE_TYPE.png]: "PNG",
};

const items: MenuProps["items"] = [
	{
		label: "Download as JPEG",
		key: IMAGE_TYPE.jpeg,
	},
	{
		label: "Download as PNG",
		key: IMAGE_TYPE.png,
	},
];

interface DropdownDownloadButtonProps {
	handleDownload: (type: string) => void;
}

const DropdownDownloadButton: React.FC<DropdownDownloadButtonProps> = ({
	handleDownload,
}) => {
	const [downloadType, setDownloadType] = useState(IMAGE_TYPE.png);

	const handleMenuClick = (e: { key: string }) => {
		setDownloadType(e.key);
		handleDownload(e.key);
	};

	return (
		<ResponsiveDropdownButton
			menu={{
				items,
				onClick: handleMenuClick,
			}}
			icon={<Icon name="ChevronDown" />}
			placement="top"
			aria-haspopup="true"
			aria-label="Download options"
			onClick={() => handleDownload(downloadType)}
		>
			{`Download as ${formatLabelMap[downloadType]}`}
		</ResponsiveDropdownButton>
	);
};

export default DropdownDownloadButton;
