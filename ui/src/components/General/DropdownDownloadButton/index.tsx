import React from "react";
import { ResponsiveDropdownButton } from "components/General/FormComponents";
import Icon from "components/General/Icon";
import { DropdownDownloadButtonProps } from "./utils/types";
import { IMAGE_TYPE, items } from "./utils/constants";

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
