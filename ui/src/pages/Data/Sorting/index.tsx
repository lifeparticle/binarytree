import style from "./Sorting.module.scss";
import { useEffect, useState } from "react";
import { sortData } from "./utils/helper";
import { Input, Segmented, Select, Form, Card, Typography } from "antd";
import { OUTPUT_FORMAT } from "./utils/constants";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import PageGrid from "components/Layouts/PageGrid";
import CopyInput from "components/Layouts/CopyInput";
import useGetSize from "lib/utils/hooks/useGetSize";

const { TextArea } = Input;
const { Title } = Typography;

const Sorting: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [outputFormat, setOutputFormat] = useState("\n");
	const { size } = useGetSize();
	const [order, setOrder] = useState("Ascending");

	useEffect(() => {
		const sortedData = sortData(input, order);
		setOutput(sortedData.join(outputFormat));
	}, [input, order, outputFormat]);

	return (
		<Form layout="vertical">
			<PageGrid>
				<Card>
					<Form.Item label="Number or string for sorting">
						<TextArea
							placeholder="Enter number or character by space or comma or new Line"
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

					<Form.Item label="Sorted Output">
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
								style={{ width: "100%" }}
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
