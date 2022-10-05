import { NumberInput } from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { generateTable } from "./util/utils";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(1);
	const [column, setColumn] = useState(1);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	// useEffect(() => {
	// 	console.log(`${column}   ${row} output: ${output}`);
	// 	if (column === undefined || row === undefined) return;
	// 	let addheader = false;
	// 	let prevRow = 0;
	// 	let prevCol = 0;
	// 	if (column === 0 && row === 0) return;
	// 	if (output === "") {
	// 		addheader = true;
	// 		console.log("1st time");
	// 	} else {
	// 		console.log(output);
	// 		console.log(output.split(/\r?\n/));
	// 		let lines = output.split(/\r?\n/).filter((line) => line !== "");
	// 		console.log(lines);
	// 		prevRow = lines.length - 2;
	// 		// output.replace(/\s/g, "").length -1
	// 		prevCol = lines[0].replace(/\s/g, "").length - 1;
	// 		console.log(lines[0].replace(/\s/g, ""));
	// 		console.log(`prevRow: ${prevRow}     prevCol: ${prevCol}`);
	// 	}

	// 	if (row > prevRow || column > prevCol) {
	// 		let newCol = column - prevCol === 0 ? column : column - prevCol;

	// 		console.log(`${output}`);
	// 		console.log(`inside if ${newCol} ${row - prevRow}`);
	// 		let newTable = generateTable(row - prevRow, newCol, addheader);
	// 		console.log(`${newTable}`);

	// 		setOutput((prevOutput) => `${prevOutput}\n${newTable}`);
	// 	}

	// 	return () => {
	// 		if (column !== undefined && row !== undefined) {
	// 			console.log(
	// 				`return ()     ${column}   ${row} output: ${output}`
	// 			);
	// 			setOutput("");
	// 		}
	// 	};
	// 	// if(column === )
	// 	// let colValue = "";
	// 	// let finalValue = "";
	// 	// for (let j = 0; j < row; j++) {
	// 	// 	colValue = "|";
	// 	// 	for (let i = 0; i < column; i++) {
	// 	// 		colValue += "               |";
	// 	// 	}
	// 	// 	finalValue += colValue + "\n";
	// 	// }
	// 	// let header = colValue;
	// 	// header = header.replaceAll(" ", "-");

	// 	// setOutput(`${colValue}\n${header}\n${finalValue}`);
	// }, [row, column]);

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
				min={0}
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
					console.log("whyyyyyyy");
					setOutput(val);
				}}
				height="800px"
				style={{ fontSize: "52" }}
			/>

			{/* <Textarea
			value={output}
			placeholder="Output"
			label="Output"
			minRows={10}
    		/> */}
		</div>
	);
};

export default TableGenerator;
