import { Space, theme } from "antd";
import { FC } from "react";
import style from "components/General/CodeEditor/CodeEditor.module.scss";
import { Icon } from "components/General";

const VALID = "valid";

interface ValidateStatusProps {
	status: string;
}

const ValidateStatus: FC<ValidateStatusProps> = ({ status }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	if (status.length === 0) {
		return null;
	}

	return (
		<Space
			className={style.codeeditor__validator}
			style={{ backgroundColor: colorBgContainer }}
			role="validation"
		>
			{status === VALID ? (
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
