import { FC, ReactNode } from "react";
import styles from "./Legal.module.scss";
import { Space } from "antd";

interface LegalProps {
	children: ReactNode;
	direction?: "vertical" | "horizontal";
}

const Legal: FC<LegalProps> = ({ children, direction = "vertical" }) => {
	return (
		<Space direction={direction} className={styles.legal}>
			{children}
		</Space>
	);
};

export default Legal;
