import style from "./Sorting.module.scss";
import { useEffect, useState } from "react";
import { detectData, sortData } from "./utils/helper";
import { Input, Segmented, Form, Card, Typography } from "antd";
import { OUTPUT_FORMAT } from "./utils/constants";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import PageGrid from "components/Layouts/PageGrid";
import CopyInput from "components/Layouts/CopyInput";
import SelectComponent from "components/General/SelectComponent";

const { TextArea } = Input;
const { Title } = Typography;

const Sorting: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [outputFormat, setOutputFormat] = useState(OUTPUT_FORMAT[0]);
	const [order, setOrder] = useState("Ascending");
	const [dataType, setDataType] = useState("");

	useEffect(() => {
		const sortedData = sortData(input, order);
		setOutput(sortedData.join(outputFormat.value));
		setDataType(detectData(input));
	}, [input, order, outputFormat]);

	return (
		<Form layout="vertical">
			<PageGrid>
				<Card>
					<Form.Item label={`Input data ${dataType} detected`}>
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

				<Card>
					<Title level={4}>Order</Title>
					<Segmented
						className={style.sort__segment}
						value={order}
						onChange={(value: string | number) =>
							setOrder(value as string)
						}
						options={[
							{ label: "Ascending", value: "Ascending" },
							{ label: "Descending", value: "Descending" },
						]}
					/>

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
						<SelectComponent
							value={outputFormat.value}
							onSelect={(_, option) => {
								setOutputFormat(option);
							}}
							options={OUTPUT_FORMAT}
							defaultActiveFirstOption
						/>

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
