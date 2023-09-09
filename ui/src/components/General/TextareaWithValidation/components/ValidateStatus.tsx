import { Space, theme } from "antd";
import React from "react";
import style from "components/General/TextareaWithValidation/TextareaWithValidation.module.scss";
import Icon from "components/General/Icon";
import { ValidateStatusPropsType } from "./utils/types";

const ValidateStatus: React.FC<ValidateStatusPropsType> = ({ status }) => {
	if (status.length === 0) {
		return null;
	}

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Space
			className={style.textareaContainer__validator}
			style={{ backgroundColor: colorBgContainer }}
		>
			{status === "valid" ? (
				<span className={style.textareaContainer__validator__success}>
					<Icon name="Check" color="green" />
				</span>
			) : (
				<span className={style.textareaContainer__validator__failed}>
					<Icon name="X" color="red" />
				</span>
			)}
		</Space>
	);
};

export default ValidateStatus;
