import { TextInput } from "@mantine/core";
import Button from "components/Button";
import { useState } from "react";
import styles from "./Shades.module.scss";
import { Input} from "antd";

const NUM_OF_SHADES = 5;

const Shades: React.FC = () => {
	const [color, setColor] = useState("");
	return (
		<div className={styles.shades}>
			<Input
				placeholder=""
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<Button>Generator</Button>
			<div className={styles.shades__shade}>
				{Array.from({ length: NUM_OF_SHADES }, (_, k) => (
					<div
						className={styles.shades__shade_box}
						style={{ backgroundColor: color }}
					>
						{k}
					</div>
				))}
			</div>
		</div>
	);
};
export default Shades;
