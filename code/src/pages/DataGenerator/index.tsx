import { faker } from "@faker-js/faker";
import {
	Button,
	NumberInput,
	Select,
	Textarea,
	TextInput,
} from "@mantine/core";
import { useState } from "react";
import style from "./DataGenerator.module.scss";

const SQL_DATA_TYPES = [
	{ value: "TEXT", label: "String" },
	{ value: "INT", label: "Integer" },
];

const FAKER_DATA_TYPES = [
	{
		value: "firstName",
		label: "First Name",
		method: () => {
			return faker.name.firstName();
		},
	},
	{
		value: "lastName",
		label: "Last Name",
		method: () => {
			return faker.name.lastName();
		},
	},
	{
		value: "fullName",
		label: "Full Name",
		method: () => {
			return faker.name.fullName();
		},
	},
];

const DataGenerator: React.FC = () => {
	const [tableName, setTableName] = useState("");
	const [result, setResult] = useState("");
	const [colNum, setColNum] = useState(0);
	const [rowNum, setRowNum] = useState(5);
	const [colNames, setColNames] = useState<string[]>([]);
	const [dataTypes, setDataTypes] = useState<string[]>([]);
	const [fakeDataTypes, setFakeDataTypes] = useState<string[]>([]);

	const onColNamesChange = (e: any, idx: number) => {
		setColNames((p: string[]) => [
			...p.slice(0, idx),
			e.target.value,
			...p.slice(idx + 1),
		]);
	};

	const onDataTypesChange = (e: any, idx: number) => {
		setDataTypes((p: string[]) => [
			...p.slice(0, idx),
			e,
			...p.slice(idx + 1),
		]);
	};

	const onFakeDataTypesChange = (e: any, idx: number) => {
		setFakeDataTypes((p: string[]) => [
			...p.slice(0, idx),
			e,
			...p.slice(idx + 1),
		]);
	};

	const onButtonClick = () => {
		console.log(colNames);
		console.log(dataTypes);
		console.log(fakeDataTypes);
		let result = "";

		let allColName = colNames.join("`, `");

		let fakeData: any = [[]];

		for (let i = 0; i < rowNum; i++) {
			fakeData[i] = [];
			for (let j = 0; j < colNames.length; j++) {
				fakeData[i].push(
					FAKER_DATA_TYPES.find((faker, index) => {
						return faker.value === fakeDataTypes[j];
					})?.method()
				);
			}
		}

		for (let i = 0; i < rowNum; i++) {
			result += `INSERT INTO \`${tableName}\` (\`${allColName}\`) VALUES ('${fakeData[
				i
			].join("', '")}')  \n`;
		}

		console.log(fakeData);

		setResult(result);
	};
	return (
		<div className={style.dg}>
			<TextInput
				label="Table name"
				placeholder="OMG, it also has a placeholder"
				value={tableName}
				onChange={(event) => setTableName(event.currentTarget.value)}
				mt="xl"
				autoComplete="nope"
			/>
			<NumberInput
				mt="xl"
				label="Number of columns"
				placeholder="NumberInput with custom layout"
				value={colNum}
				onChange={(val: any) => {
					setColNum(val);
					setColNames((p: string[]) => [...p.slice(0, val)]);
					setDataTypes((p: string[]) => [...p.slice(0, val)]);
					setFakeDataTypes((p: string[]) => [...p.slice(0, val)]);
				}}
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
								value={
									colNames[k] === undefined
										? (colNames[k] = "")
										: colNames[k]
								}
								onChange={(e) => onColNamesChange(e, k)}
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
								value={
									dataTypes[k] === undefined
										? (dataTypes[k] = "")
										: dataTypes[k]
								}
								data={SQL_DATA_TYPES}
								onChange={(e) => onDataTypesChange(e, k)}
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Select
								mt="xl"
								key={`faker-data-type-${k}`}
								label={`# ${k + 1}`}
								value={
									fakeDataTypes[k] === undefined
										? (fakeDataTypes[k] = "")
										: fakeDataTypes[k]
								}
								placeholder="Pick one"
								data={FAKER_DATA_TYPES}
								onChange={(e) => onFakeDataTypesChange(e, k)}
							/>
						))}
					</div>
				</div>
				<div className={style.dg__table_right}>
					{colNum > 0 ? (
						<>
							<Textarea
								placeholder=""
								label="SQL"
								value={result}
								minRows={10}
								readOnly
							/>
							<Button
								styles={(theme) => ({
									root: {
										backgroundColor:
											theme.colorScheme === "dark"
												? theme.colors.dark
												: "#228be6",
									},
								})}
								onClick={onButtonClick}
							>
								Generate
							</Button>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default DataGenerator;
