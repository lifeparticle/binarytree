import { Button, Space } from "antd";
import { Check, X } from "lucide-react";
import React from "react";
import style from "components/General/TextareaWithValidation/TextareaWithValidation.module.scss";

interface ValidateStatusProps {
	status: string;
}

const ValidateStatus: React.FC<ValidateStatusProps> = ({ status }) => {
	return (
		<Space className={style.textareaContainer__validator}>
			{status.length === 0 ? null : status === "valid" ? (
				<Button size="small" style={{ borderColor: "green" }}>
					<Check color="green" size={16} />
				</Button>
			) : (
				<Button size="small" danger>
					<X size={16} />
				</Button>
			)}
		</Space>
	);
};

export default ValidateStatus;
