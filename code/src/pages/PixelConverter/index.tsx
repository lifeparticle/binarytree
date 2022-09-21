import { NumberInput } from "@mantine/core";
import { useState } from "react";
import style from "./PixelConverter.module.scss";

const PixelConverter: React.FC = () => {
	const [pixel, setPixel] = useState(0.0);
	const [rem, setRem] = useState(0.0);
	const [base, setBase] = useState(16);
	return (
		<div className={style.pc}>
			<NumberInput
				precision={10}
				min={0}
				step={1}
				mt="xl"
				label="Pixels"
				placeholder="NumberInput with custom layout"
				value={pixel}
				onChange={(px: number) => {
					setPixel(px);
					setRem(px / base);
				}}
			/>

			<NumberInput
				precision={10}
				min={0}
				step={0.01}
				mt="xl"
				label="REM"
				placeholder="NumberInput with custom layout"
				value={rem}
				onChange={(rem: number) => {
					setRem(rem);
					setPixel(rem * base);
				}}
			/>

			<NumberInput
				className={style.pc__base}
				precision={10}
				min={0}
				step={1}
				mt="xl"
				label="Base Font Size"
				placeholder="NumberInput with custom layout" //plz cont
				value={base}
				onChange={(base: number) => {
					setBase(base);
					setRem(pixel / base);
				}}
			/>
		</div>
	);
};

export default PixelConverter;
