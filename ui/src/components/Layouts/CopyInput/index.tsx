import { Form } from "antd";
import React from "react";
import { CopyInputProps } from "./utils/types";
import style from "./CopyInput.module.scss";

const CopyInput: React.FC<CopyInputProps> = ({ children }) => {
	const [children1, children2] = React.Children.toArray(children);

	const firstChildProps = (children1 as React.ReactElement).props;

	return (
		<Form.Item
			label={firstChildProps.label}
			tooltip={firstChildProps.tooltip}
		>
			<div className={style.copyinput}>
				<div className={style.copyinput__input}>{children1}</div>
				{children2 ? <div>{children2}</div> : null}
			</div>
		</Form.Item>
	);
};

export default CopyInput;
