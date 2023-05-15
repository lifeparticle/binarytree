import { NumberInput } from "@mantine/core";
import { useState } from "react";
import style from "./PixelConverter.module.scss";
import { InputNumber } from "antd";

const PixelConverter: React.FC = () => {
	const [pixel, setPixel] = useState(0.0);
	const [rem, setRem] = useState(0.0);
	const [base, setBase] = useState(16);
	return (
		<div className={style.pc}>
			<InputNumber
				precision={10}
				min={0}
				step={1}
				placeholder="NumberInput with custom layout"
				value={pixel}
				onChange={(px: number | null) => {
					if(px) {
						setPixel(px);
						setRem(px / base);
					}
				}}
			/>

			<InputNumber
				precision={10}
				min={0}
				step={0.01}
				placeholder="NumberInput with custom layout"
				value={rem}
				onChange={(rem: number | null) => {
					if(rem) {
						setRem(rem);
						setPixel(rem * base);
					}
				}}
			/>

			<InputNumber
				className={style.pc__base}
				precision={10}
				min={0}
				step={1}
				placeholder="NumberInput with custom layout" //plz cont
				value={base}
				onChange={(base: number | null) => {
					if(base) {
						setBase(base);
						setRem(pixel / base);
					}
				}}
			/>
		</div>
	);
};

export default PixelConverter;
