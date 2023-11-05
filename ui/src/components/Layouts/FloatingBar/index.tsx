import React from "react";
import styles from "./FloatingBar.module.scss";
import { FloatingHeader, FloatingSearchBar } from "components/Layouts";
import { theme } from "antd";

const FloatingBar: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<div className={styles.fb}>
			<div className={styles.fb__container}>
				<FloatingSearchBar
					styles={{
						backgroundColor: colorBgContainer,
					}}
				/>
				<FloatingHeader
					styles={{
						backgroundColor: colorBgContainer,
					}}
				/>
			</div>
		</div>
	);
};

export default FloatingBar;
