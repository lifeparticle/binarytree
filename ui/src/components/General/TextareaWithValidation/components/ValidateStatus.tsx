import { Button, Space } from "antd";
import { Check, X } from "lucide-react";
import React from "react";
import style from "components/General/TextareaWithValidation/TextareaWithValidation.module.scss";

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
					<Check color="green" size={16} strokeWidth="1.3" />
				</Button>
			) : (
				<Button size="small" danger>
					<X size={16} strokeWidth="1.3" />
				</Button>
			)}
		</Space>
	);
};

export default ValidateStatus;
