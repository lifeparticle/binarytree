import { useClipboard } from "@mantine/hooks";
import { AutoComplete, Button, Card, Form, Input, Select, Space } from "antd";
import { downloadTextFile } from "lib/utils/files";
import { useState } from "react";
import style from "./DataGenerator.module.scss";
import { FAKER_DATA_TYPES, MYSQL_DATA_TYPES } from "./utils/constants";
import { convertToJSON } from "./utils/utils";
import InputComponent from "components/General/InputComponent";
import Output from "./components/Output";
import PageGrid from "components/Layouts/PageGrid";

const DataGenerator: React.FC = () => {
	const [tableName, setTableName] = useState("");
	const [result, setResult] = useState("");
	const [colNum, setColNum] = useState(0);
	const [rowNum, setRowNum] = useState(0);
	const [colNames, setColNames] = useState<string[]>([]);
	const [dataTypes, setDataTypes] = useState<string[]>([]);
	const [fakeDataTypes, setFakeDataTypes] = useState<string[]>([]);

	const clipboard = useClipboard({ timeout: 500 });

	const onColNamesChange = (e: string, idx: number) => {
		setColNames((p: string[]) => [
			...p.slice(0, idx),
			e,
			...p.slice(idx + 1),
		]);
	};

	const onDataTypesChange = (e: string, idx: number) => {
		setDataTypes((p: string[]) => [
			...p.slice(0, idx),
			e,
			...p.slice(idx + 1),
		]);
	};

	const onFakeDataTypesChange = (e: string, idx: number) => {
		setFakeDataTypes((p: string[]) => [
			...p.slice(0, idx),
			e,
			...p.slice(idx + 1),
		]);
	};

	const onButtonClick = () => {
		let result = "";
		const allColName = colNames.join("`, `");
		const fakeDataMethods = [];
		let sqlTable = `CREATE TABLE \`${tableName}\` (\n`;

		for (let i = 0; i < colNames.length; i++) {
			sqlTable += `\`${colNames[i]}\` ${dataTypes[i]}\n`;
		}

		sqlTable += `) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;`;

		for (let j = 0; j < colNames.length; j++) {
			fakeDataMethods.push(
				FAKER_DATA_TYPES.find((faker) => {
					return faker.value === fakeDataTypes[j];
				})?.method
			);
		}

		for (let i = 0; i < rowNum; i++) {
			const fakeData = [];
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
		<Form layout="vertical" className={style.dg}>
			<PageGrid>
				<Card>
					<div className={style.dg__left}>
						<div className={style.dg__left_top}>
							<InputComponent
								label="Table Name"
								placeholder="Table name"
								value={tableName}
								onChange={(event) =>
									setTableName(event.currentTarget.value)
								}
								type="text"
							/>

							<InputComponent
								label="Total Column Number"
								placeholder="NumberInput with custom layout"
								value={colNum}
								min={0}
								onChange={(val) => {
									if (val) {
										setColNum(val);
										setColNames((p: string[]) => [
											...p.slice(0, val),
										]);
										setDataTypes((p: string[]) => [
											...p.slice(0, val),
										]);
										setFakeDataTypes((p: string[]) => [
											...p.slice(0, val),
										]);
									}
								}}
								type="number"
							/>

							<InputComponent
								label="Generate total Row Data (Output)"
								placeholder="NumberInput with custom layout"
								value={rowNum}
								min={0}
								onChange={(val) => val && setRowNum(val)}
								type="number"
							/>
						</div>

						<div className={style.dg__left__bottom}>
							<div>
								{Array.from({ length: colNum }, (_, k) => (
									<AutoComplete
										className={
											style.dg__left__bottom__autocomplete
										}
										size="large"
										key={`faker-data-type-${k}`}
										value={fakeDataTypes[k] || ""}
										placeholder="Pick one"
										options={FAKER_DATA_TYPES}
										onChange={(e) => {
											onFakeDataTypesChange(e, k);
											onColNamesChange(e, k);
										}}
										style={{ width: "100%" }}
									/>
								))}
							</div>
							<div>
								{Array.from({ length: colNum }, (_, k) => (
									<Select
										key={`data-type-${k}`}
										className={
											style.dg__left__bottom__select
										}
										value={
											dataTypes[k] === undefined
												? ""
												: dataTypes[k]
										}
										size="large"
										options={MYSQL_DATA_TYPES}
										onChange={(e) =>
											onDataTypesChange(e, k)
										}
									/>
								))}
							</div>
							<div>
								{Array.from({ length: colNum }, (_, k) => (
									<Input
										className={
											style.dg__left__bottom__input
										}
										size="large"
										key={`col-name-${k}`}
										placeholder="Column name"
										onChange={(e) =>
											onColNamesChange(e.target.value, k)
										}
										autoComplete="nope"
										value={
											colNames[k] === undefined
												? ""
												: colNames[k]
										}
									/>
								))}
							</div>
						</div>
					</div>

					<Button
						disabled={tableName && colNum > 0 ? false : true}
						onClick={onButtonClick}
					>
						Generate
					</Button>
				</Card>

				{result.length > 0 ? (
					<Card>
						<div className={style.dg__right}>
							<>
								<Space>
									<Button
										onClick={() => {
											downloadTextFile(
												result,
												"data.sql"
											);
										}}
									>
										Download SQL
									</Button>
									<Button
										onClick={() => {
											downloadTextFile(
												convertToJSON(
													colNames,
													rowNum,
													result
												),
												"data.json"
											);
										}}
									>
										Download JSON
									</Button>
									<Button
										onClick={() => clipboard.copy(result)}
									>
										{clipboard.copied ? "Copied" : "Copy"}
									</Button>
								</Space>

								<Output sql={result} json="" />
							</>
						</div>
					</Card>
				) : null}
			</PageGrid>
		</Form>
	);
};

export default DataGenerator;
