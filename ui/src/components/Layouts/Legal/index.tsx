import React, { ReactNode } from "react";
import styles from "./Legal.module.scss";
import { Space } from "antd";

interface LegalProps {
	children: ReactNode;
}

const Legal: React.FC<LegalProps> = ({ children }) => {
	return (
		<Space direction="vertical" className={styles.legal}>
			{children}
		</Space>
	);
};

export default Legal;
