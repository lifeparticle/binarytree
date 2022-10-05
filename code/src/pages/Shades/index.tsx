import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "./Shades.module.scss";

const NUM_OF_SHADES = 5;

const Shades: React.FC = () => {
	const [color, setColor] = useState("");
	return (
		<div className={styles.shades}>
			<TextInput
				placeholder=""
				label="HEX Code"
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
