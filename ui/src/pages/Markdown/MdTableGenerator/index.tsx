import MDEditor from "@uiw/react-md-editor";
import { Card, Col, Form, Row } from "antd";
import { useContext, useState, useTransition } from "react";
import { generateTable } from "./util/utils";
import InputComponent from "components/General/InputComponent";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import CopyInput from "components/Layouts/CopyInput";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const { isDarkMode } = useContext(DarkModeContext);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	const [isPending, startTransition] = useTransition();

	return (
		<Card bordered={false}>
			<Form layout="vertical">
				<Row gutter={16}>
					<Col sm={24} md={12}>
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
					</Col>

					<Col sm={24} md={12}>
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
												generateTable(
													row,
													val,
													prevOutput
												)
											);
										});
									}
								}}
							/>
						</CopyInput>
					</Col>
				</Row>
				<div data-color-mode={isDarkMode ? "dark" : "light"}>
					<MDEditor
						value={isPending ? "Generating table..." : output}
						onChange={(val) => val && setOutput(val)}
						height="800px"
						style={{ fontSize: "52" }}
					/>
				</div>
			</Form>
		</Card>
	);
};

export default TableGenerator;
