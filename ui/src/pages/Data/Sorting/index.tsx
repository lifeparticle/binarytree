import style from "./Sorting.module.scss";
import { useEffect, useState } from "react";
import { detectData, sortData } from "./utils/helper";
import { Input, Segmented, Select, Form, Card, Badge } from "antd";
import { OUTPUT_FORMAT } from "./utils/constants";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import PageGrid from "components/Layouts/PageGrid";
import CopyInput from "components/Layouts/CopyInput";
import useGetSize from "lib/utils/hooks/useGetSize";

const { TextArea } = Input;

const Sorting: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [outputFormat, setOutputFormat] = useState("\n");
	const { size } = useGetSize();
	const [order, setOrder] = useState("Ascending");
	const [dataType, setDataType] = useState("");

	useEffect(() => {
		const sortedData = sortData(input, order);
		setOutput(sortedData.join(outputFormat));
		setDataType(detectData(input));
	}, [input, order, outputFormat]);

	return (
		<Form layout="vertical" className={style.sort}>
			<PageGrid>
				<Card className={style.sort__input}>
					<Form.Item
						label={
							<div className={style.sort__input_label}>
								<p>{`Input data`}</p>
								<Badge
									text={`${dataType} detected`}
									color={
										dataType === "No data"
											? "yellow"
											: "green"
									}
								/>
							</div>
						}
					>
						<TextArea
							placeholder="Enter data separated by space or comma or new line"
							value={input}
							rows={18}
							onChange={(event) => {
								setInput(event.currentTarget.value);
							}}
							data-gramm={false}
						/>
					</Form.Item>
				</Card>

				<Card className={style.sort__ouput}>
					<Form.Item label="Order">
						<Segmented
							value={order}
							onChange={(value: string | number) =>
								setOrder(value as string)
							}
							options={[
								{ label: "Ascending", value: "Ascending" },
								{ label: "Descending", value: "Descending" },
							]}
						/>
					</Form.Item>

					<Form.Item label="Sorted output">
						<TextArea
							placeholder="output"
							value={output}
							rows={10}
							readOnly
							data-gramm={false}
						/>
					</Form.Item>

					<CopyInput>
						<Form.Item label="Output format">
							<Select
								defaultActiveFirstOption
								placeholder="Separate results by new lines"
								onChange={(value) => setOutputFormat(value)}
								options={OUTPUT_FORMAT}
								size={size}
							/>
						</Form.Item>

						<Clipboard
							text={output}
							clipboardComponent={ClipboardButton}
						/>
					</CopyInput>
				</Card>
			</PageGrid>
		</Form>
	);
};

export default Sorting;
