import MDEditor from "@uiw/react-md-editor";
import { Form } from "antd";
import { useContext, useState, useTransition } from "react";
import { generateTable } from "./util/utils";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import PageGrid from "components/Layouts/PageGrid";
import style from "./MdTableGenerator.module.scss";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";

const TableGenerator: React.FC = () => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);
	const { isDarkMode } = useContext(DarkModeContext);
	const [output, setOutput] = useState(() => {
		return generateTable(row, column, "");
	});

	const [isPending, startTransition] = useTransition();

	return (
		<div className={style.md}>
			<Clipboard text={output} clipboardComponent={ClipboardButton} />
			<Form layout="vertical">
				<PageGrid>
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
										generateTable(val, column, prevOutput)
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
				</PageGrid>
			</Form>
			<div
				className={style.md__editor}
				data-color-mode={isDarkMode ? "dark" : "light"}
			>
				<MDEditor
					value={isPending ? "Generating table..." : output}
					onChange={(val) => val && setOutput(val)}
					height="100%"
					style={{ fontSize: "52" }}
				/>
			</div>
		</div>
	);
};

export default TableGenerator;
