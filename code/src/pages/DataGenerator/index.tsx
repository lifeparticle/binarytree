// import { faker } from "@faker-js/faker";
import { NumberInput, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import style from "./DataGenerator.module.scss";

const DataGenerator: React.FC = () => {
	const [value, setValue] = useState("");
	const [colNum, setColNum] = useState(0);

	return (
		<div className={style.dg}>
			<TextInput
				label="Table name"
				placeholder="OMG, it also has a placeholder"
				value={value}
				onChange={(event) => setValue(event.currentTarget.value)}
				mt="xl"
				autoComplete="nope"
			/>
			<NumberInput
				mt="xl"
				label="Height"
				placeholder="NumberInput with custom layout"
				value={colNum}
				onChange={(val: any) => setColNum(val)}
			/>
			<div className={style.dg__table}>
				<div className={style.dg__table_left}>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<TextInput
								label={`# ${k + 1}`}
								placeholder="Column name"
								value={value}
								onChange={(event) => setValue(event.currentTarget.value)}
								mt="xl"
								autoComplete="nope"
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<TextInput
								label={`# ${k + 1}`}
								placeholder="Column name"
								value={value}
								onChange={(event) => setValue(event.currentTarget.value)}
								mt="xl"
								autoComplete="nope"
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<TextInput
								label={`# ${k + 1}`}
								placeholder="Column name"
								value={value}
								onChange={(event) => setValue(event.currentTarget.value)}
								mt="xl"
								autoComplete="nope"
							/>
						))}
					</div>
				</div>

				<div className={style.dg__table_right}>
					<Textarea placeholder="" label="SQL" />
				</div>
			</div>
		</div>
	);
};

export default DataGenerator;
