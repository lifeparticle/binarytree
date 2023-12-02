import React, { FC } from "react";
import style from "./CopyInput.module.scss";

interface CopyInputProps {
	children: React.ReactNode;
}

const CopyInput: FC<CopyInputProps> = ({ children }) => {
	const [input, clipboard] = React.Children.toArray(children);

	return (
		<div className={style.copyinput}>
			<div className={style.copyinput__input}>{input}</div>
			{clipboard ? (
				<div className={style.copyinput__copybtn}>{clipboard}</div>
			) : null}
		</div>
	);
};

export default CopyInput;
