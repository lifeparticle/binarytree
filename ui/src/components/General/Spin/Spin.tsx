import { FC } from "react";
import { Spin as AntdSpin } from "antd";
import styles from "./Spin.module.scss";

const Spin: FC = () => {
	return (
		<div className={styles.spin}>
			<AntdSpin />
		</div>
	);
};

export default Spin;
