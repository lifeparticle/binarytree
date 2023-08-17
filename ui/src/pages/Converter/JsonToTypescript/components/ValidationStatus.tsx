import { Button, Space } from "antd";
import { Check, X } from "lucide-react";
import React from "react";
import style from "pages/Converter/JsonToTypescript/JsonToTypescript.module.scss";

const ValidationStatus: React.FC<{ status: string }> = ({ status }) => {
	return (
		<Space className={style.json__textarea__validator}>
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

export default ValidationStatus;
