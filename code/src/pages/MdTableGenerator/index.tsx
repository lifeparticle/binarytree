import { NumberInput } from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { generateTable } from "./util/utils";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	return (
		<div>
			<NumberInput
				value={row}
				placeholder="Row"
				label="Row"
				min={0}
				onChange={(val: number) => {
					setRow(val);
					setOutput((prevOutput) =>
						generateTable(val, column, prevOutput)
					);
				}}
			/>

			<NumberInput
				value={column}
				placeholder="Column"
				label="Column"
				min={1}
				onChange={(val: number) => {
					setColumn(val);
					setOutput((prevOutput) =>
						generateTable(row, val, prevOutput)
					);
				}}
			/>

			<MDEditor
				value={output}
				onChange={(val: any) => {
					setOutput(val);
				}}
				height="800px"
				style={{ fontSize: "52" }}
			/>
		</div>
	);
};

export default TableGenerator;
