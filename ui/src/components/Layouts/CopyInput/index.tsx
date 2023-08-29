import React from "react";
import { CopyInputProps } from "./utils/types";
import style from "./CopyInput.module.scss";

const CopyInput: React.FC<CopyInputProps> = ({ children }) => {
	const [children1, children2] = React.Children.toArray(children);

	return (
		<div className={style.copyinput}>
			<div className={style.copyinput__input}>{children1}</div>
			{children2 ? <div>{children2}</div> : null}
		</div>
	);
};

export default CopyInput;
