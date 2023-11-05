import MDEditor from "@uiw/react-md-editor";
import { Card, Form, Space, Spin } from "antd";
import { useState, useTransition } from "react";
import { generateTable } from "./util/utils";
import { ClipboardButton, ResponsiveInputWithLabel } from "components/General";
import style from "./MdTableGenerator.module.scss";
import { Clipboard } from "components/RenderProps";
import useMode from "hooks/useMode";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const { isDarkMode } = useMode();
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	const [isPending, startTransition] = useTransition();

	return (
		<div className={style.md}>
			<Card>
				<Form layout="vertical">
					<Space align="end">
						<ResponsiveInputWithLabel
							label="Number of rows"
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

						<ResponsiveInputWithLabel
							label="Number of columns"
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

						<Form.Item>
							<Clipboard
								text={output}
								clipboardComponent={ClipboardButton}
							/>
						</Form.Item>
					</Space>
				</Form>
			</Card>
			<div
				className={style.md__editor}
				data-color-mode={isDarkMode ? "dark" : "light"}
			>
				{isPending && (
					<div className={style.md__editor__spinner}>
						<Spin />
					</div>
				)}
				<MDEditor
					value={output}
					onChange={(val) => setOutput(val || "")}
					height="100%"
				/>
			</div>
		</div>
	);
};

export default TableGenerator;
