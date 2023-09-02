import { Space } from "antd";
import React from "react";
import style from "components/General/TextareaWithValidation/TextareaWithValidation.module.scss";
import Icon from "components/General/Icon";
import { ResponsiveButton } from "components/General/FormComponents";

interface ValidateStatusProps {
	status: string;
}

const ValidateStatus: React.FC<ValidateStatusProps> = ({ status }) => {
	if (status.length === 0) {
		return null;
	}

	return (
		<Space className={style.textareaContainer__validator}>
			{status === "valid" ? (
				<ResponsiveButton size="small" style={{ borderColor: "green" }}>
					<Icon name="Check" color="green" />
				</ResponsiveButton>
			) : (
				<ResponsiveButton size="small" danger>
					<Icon name="X" />
				</ResponsiveButton>
			)}
		</Space>
	);
};

export default ValidateStatus;
