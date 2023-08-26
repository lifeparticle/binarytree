import { Button, Space } from "antd";
import React from "react";
import style from "components/General/TextareaWithValidation/TextareaWithValidation.module.scss";
import Icon from "components/General/Icon";

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
				<Button size="small" style={{ borderColor: "green" }}>
					<Icon name="Check" color="green" />
				</Button>
			) : (
				<Button size="small" danger>
					<Icon name="X" />
				</Button>
			)}
		</Space>
	);
};

export default ValidateStatus;
