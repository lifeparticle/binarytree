import { Space, theme } from "antd";
import React from "react";
import style from "components/General/CodeEditor/CodeEditor.module.scss";
import Icon from "components/General/Icon";
import { ValidateStatusProps } from "./utils/types";

const ValidateStatus: React.FC<ValidateStatusProps> = ({ status }) => {
	if (status.length === 0) {
		return null;
	}

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Space
			className={style.codeeditor__validator}
			style={{ backgroundColor: colorBgContainer }}
			role="validation"
		>
			{status === "valid" ? (
				<span className={style.codeeditor__validator__success}>
					<Icon name="Check" color="green" />
				</span>
			) : (
				<span className={style.codeeditor__validator__failed}>
					<Icon name="X" color="red" />
				</span>
			)}
		</Space>
	);
};

export default ValidateStatus;
