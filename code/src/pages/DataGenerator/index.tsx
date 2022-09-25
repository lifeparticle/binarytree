import {
	Autocomplete,
	Button,
	Group,
	NumberInput,
	Select,
	Textarea,
	TextInput,
} from "@mantine/core";
import { useState } from "react";
import style from "./DataGenerator.module.scss";
import { FAKER_DATA_TYPES, SQL_DATA_TYPES } from "./util/constants";

import { saveAs } from "file-saver";

const DataGenerator: React.FC = () => {
	const [tableName, setTableName] = useState("");
	const [result, setResult] = useState("");
	const [colNum, setColNum] = useState(0);
	const [rowNum, setRowNum] = useState(0);
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
				placeholder="Table name"
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
				min={0}
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
				min={0}
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
					{/* Fix the warning */}
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Autocomplete
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
								onChange={(e: any) =>
									onFakeDataTypesChange(e, k)
								}
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
							<Group>
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
								<Button
									styles={(theme) => ({
										root: {
											backgroundColor:
												theme.colorScheme === "dark"
													? theme.colors.dark
													: "#228be6",
										},
									})}
									onClick={() => {
										saveAs(
											new File([result], "demo.sql", {
												type: "text/plain;charset=utf-8",
											})
										);
									}}
								>
									Download
								</Button>
							</Group>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default DataGenerator;
