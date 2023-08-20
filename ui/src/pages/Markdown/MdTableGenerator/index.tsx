import MDEditor from "@uiw/react-md-editor";
import { Card, Form, Space } from "antd";
import { useState, useTransition } from "react";
import { generateTable } from "./util/utils";
import CopyInput from "components/Layouts/CopyInput";
import InputComponent from "components/General/InputComponent";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	const [isPending, startTransition] = useTransition();

	return (
		<Card bordered={false}>
			<Form layout="vertical">
				<Space direction="vertical" style={{ width: "100%" }}>
					<CopyInput>
						<InputComponent
							label="Number of ROW"
							value={row}
							placeholder="Row"
							min={0}
							onChange={(val: number | null) => {
								if (val !== null) {
									startTransition(() => {
										setRow(val);
										setOutput((prevOutput) =>
											generateTable(
												val,
												column,
												prevOutput
											)
										);
									});
								}
							}}
							type="number"
						/>
					</CopyInput>

					<CopyInput>
						<InputComponent
							label="Number of Column"
							type="number"
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
					</CopyInput>

					<MDEditor
						value={isPending ? "Generating table..." : output}
						onChange={(val) => val && setOutput(val)}
						height="800px"
						style={{ fontSize: "52" }}
					/>
				</Space>
			</Form>
		</Card>
	);
};

export default TableGenerator;
