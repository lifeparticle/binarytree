import {
	Autocomplete,
	Group,
	NumberInput,
	Select,
	Textarea,
	TextInput,
} from "@mantine/core";
import { downloadTextFile } from "utils/utils";
import { useState } from "react";
import style from "./DataGenerator.module.scss";
import { FAKER_DATA_TYPES, MYSQL_DATA_TYPES } from "./utils/constants";
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import { convertToJSON } from "./utils/utils";

const DataGenerator: React.FC = () => {
	const [tableName, setTableName] = useState("");
	const [result, setResult] = useState("");
	const [colNum, setColNum] = useState(0);
	const [rowNum, setRowNum] = useState(0);
	const [colNames, setColNames] = useState<string[]>([]);
	const [dataTypes, setDataTypes] = useState<string[]>([]);
	const [fakeDataTypes, setFakeDataTypes] = useState<string[]>([]);

	const clipboard = useClipboard({ timeout: 500 });

	const onColNamesChange = (e: any, idx: number) => {
		setColNames((p: string[]) => [
			...p.slice(0, idx),
			e,
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
		// console.log(colNames);
		// console.log(dataTypes);
		// console.log(fakeDataTypes);

		let result = "";
		let allColName = colNames.join("`, `");
		let fakeDataMethods: any = [];
		let sqlTable = `CREATE TABLE \`${tableName}\` (\n`;

		for (let i = 0; i < colNames.length; i++) {
			sqlTable += `\`${colNames[i]}\` ${dataTypes[i]}\n`;
		}

		sqlTable += `) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;`;

		for (let j = 0; j < colNames.length; j++) {
			fakeDataMethods.push(
				FAKER_DATA_TYPES.find((faker, index) => {
					return faker.value === fakeDataTypes[j];
				})?.method
			);
		}

		for (let i = 0; i < rowNum; i++) {
			let fakeData: any = [];
			for (let j = 0; j < colNames.length; j++) {
				fakeData.push(fakeDataMethods[j]?.());
			}

			result += `INSERT INTO \`${tableName}\` (\`${allColName}\`) VALUES ('${fakeData.join(
				"', '"
			)}');\n`;
		}

		setResult(`${sqlTable}\n\n\n\n\n${result}`);
	};

	return (
		<div className={style.dg}>
			<div className={style.dg__left}>
				<div className={style.dg__left_top}>
					<TextInput
						label="Table name"
						placeholder="Table name"
						value={tableName}
						onChange={(event) =>
							setTableName(event.currentTarget.value)
						}
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
							setFakeDataTypes((p: string[]) => [
								...p.slice(0, val),
							]);
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
				</div>

				<div className={style.dg__left_left}>
					{/* Fix the warning */}
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Autocomplete
								mt="xl"
								key={`faker-data-type-${k}`}
								label={`Faker data type #${k + 1}`}
								value={
									fakeDataTypes[k] === undefined
										? (fakeDataTypes[k] = "")
										: fakeDataTypes[k]
								}
								placeholder="Pick one"
								data={FAKER_DATA_TYPES}
								onChange={(e: any) => {
									onFakeDataTypesChange(e, k);
									if (colNames[k] === "")
										onColNamesChange(e, k);
								}}
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<Select
								mt="xl"
								key={`data-type-${k}`}
								label={`Data type #${k + 1}`}
								placeholder="Data type"
								value={
									dataTypes[k] === undefined
										? (dataTypes[k] =
												MYSQL_DATA_TYPES[0].value)
										: dataTypes[k]
								}
								data={MYSQL_DATA_TYPES}
								onChange={(e) => onDataTypesChange(e, k)}
							/>
						))}
					</div>
					<div>
						{Array.from({ length: colNum }, (_, k) => (
							<TextInput
								key={`col-name-${k}`}
								label={`Column name #${k + 1}`}
								placeholder="Column name"
								value={
									colNames[k] === undefined
										? (colNames[k] = "")
										: colNames[k]
								}
								onChange={(e) =>
									onColNamesChange(e.target.value, k)
								}
								mt="xl"
								autoComplete="nope"
							/>
						))}
					</div>
				</div>
			</div>

			<div className={style.dg__right}>
				{colNum > 0 ? (
					<>
						<Group mt="xl">
							<Button onClick={onButtonClick}>Generate</Button>
							<Button
								onClick={() => {
									downloadTextFile(result, "data.sql");
								}}
							>
								Download SQL
							</Button>
							<Button
								onClick={() => {
									downloadTextFile(
										convertToJSON(colNames, rowNum, result),
										"data.json"
									);
								}}
							>
								Download JSON
							</Button>
							<Button onClick={() => clipboard.copy(result)}>
								{clipboard.copied ? "Copied" : "Copy"}
							</Button>
						</Group>
						<Textarea
							placeholder=""
							label="SQL"
							value={result}
							maxRows={30}
							minRows={30}
							readOnly
						/>
					</>
				) : null}
			</div>
		</div>
	);
};

export default DataGenerator;
