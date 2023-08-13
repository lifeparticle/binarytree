import MDEditor from "@uiw/react-md-editor";
import { InputNumber, Space } from "antd";
import { useState, useTransition } from "react";
import { generateTable } from "./util/utils";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	const [isPending, startTransition] = useTransition();

	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			<InputNumber
				style={{ width: "100%" }}
				value={row}
				placeholder="Row"
				min={0}
				onChange={(val: number | null) => {
					if (val !== null) {
						startTransition(() => {
							setRow(val);
							setOutput((prevOutput) =>
								generateTable(val, column, prevOutput)
							);
						});
					}
				}}
			/>

			<InputNumber
				style={{ width: "100%" }}
				value={column}
				placeholder="Column"
				min={1}
				onChange={(val: number | null) => {
					if (val !== null) {
						startTransition(() => {
							setColumn(val);
							setOutput((prevOutput) =>
								generateTable(row, val, prevOutput)
							);
						});
					}
				}}
			/>

			<MDEditor
				value={isPending ? "Generating table..." : output}
				onChange={(val) => val && setOutput(val)}
				height="800px"
				style={{ fontSize: "52" }}
			/>
		</Space>
	);
};

export default TableGenerator;
