// import { faker } from "@faker-js/faker";
import { NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import style from "./DataGenerator.module.scss";

const DataGenerator: React.FC = () => {
	const [value, setValue] = useState("");
	const [colNum, setColNum] = useState(0);
	const [rowNum, setRowNum] = useState(0);
	const [colNames, setColNames] = useState<any>([{}]);

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
				label="Number of columns"
				placeholder="NumberInput with custom layout"
				value={colNum}
				onChange={(val: any) => setColNum(val)}
			/>
			<NumberInput
				mt="xl"
				label="Number of rows"
				placeholder="NumberInput with custom layout"
				value={rowNum}
				onChange={(val: any) => setRowNum(val)}
			/>
			<div className={style.dg__table}>
				<div className={style.dg__table_left}>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<TextInput
								key={`col-name-${k}`}
								label={`# ${k + 1}`}
								placeholder="Column name"
								value={"dddd"}
								onChange={(event) => {
									setColNames((pA: any) => {
										// pA[k] = {};
										console.log(pA);
										pA.push({ id: k, value: event.currentTarget.value });
									});
								}}
								mt="xl"
								autoComplete="nope"
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Select
								mt="xl"
								key={`data-type-${k}`}
								label={`# ${k + 1}`}
								placeholder="Pick one"
								data={[
									{ value: "string", label: "String" },
									// { value: "ng", label: "Angular" },
									// { value: "svelte", label: "Svelte" },
									// { value: "vue", label: "Vue" },
								]}
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Select
								mt="xl"
								key={`fake-data-type-${k}`}
								label={`# ${k + 1}`}
								placeholder="Pick one"
								data={[
									{ value: "firstName", label: "First Name" },
									// { value: "ng", label: "Angular" },
									// { value: "svelte", label: "Svelte" },
									// { value: "vue", label: "Vue" },
								]}
							/>
						))}
					</div>
				</div>
				<div className={style.dg__table_right}>
					{colNum > 0 ? <Textarea placeholder="" label="SQL" /> : null}
				</div>
			</div>
		</div>
	);
};

export default DataGenerator;
