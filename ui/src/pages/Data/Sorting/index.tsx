import style from "./Sorting.module.scss";
import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { sortData } from "./utils/helper";
import {
	Button,
	Input,
	Space,
	Segmented,
	Select,
	Form,
	Card,
	Typography,
} from "antd";
import { OUTPUT_FORMAT } from "./utils/constants";
const { TextArea } = Input;

const Sorting: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [outputFormat, setOutputFormat] = useState("\n");
	const [order, setOrder] = useState("Ascending");
	const clipboard = useClipboard({ timeout: 500 });
	const inputClipBoard = useClipboard({ timeout: 500 });

	useEffect(() => {
		const sortedData = sortData(input, order);
		setOutput(sortedData.join(outputFormat));
	}, [input, order, outputFormat]);

	return (
		<Form layout="vertical">
			<div className={style.sort}>
				<Space direction="vertical">
					<Card>
						<Form.Item label="Number or string for sorting">
							<TextArea
								placeholder="Enter number or character by space or comma or new Line"
								value={input}
								rows={10}
								onChange={(event) => {
									setInput(event.currentTarget.value);
								}}
								data-gramm={false}
							/>
						</Form.Item>

						<Space>
							<Button onClick={() => inputClipBoard.copy(input)}>
								{inputClipBoard.copied ? "Copied" : "Copy"}
							</Button>

							<Button onClick={() => setInput("")}>Clear</Button>
						</Space>
					</Card>
				</Space>

				<Space direction="vertical">
					<Card>
						<Typography.Title level={4}>Order</Typography.Title>
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

						<Form.Item label="Output Format">
							<Select
								defaultActiveFirstOption
								placeholder="Separate results by new lines"
								style={{ width: "100%" }}
								onChange={(value) => setOutputFormat(value)}
								options={OUTPUT_FORMAT}
							/>
						</Form.Item>

						<Space>
							<Button onClick={() => clipboard.copy(output)}>
								{clipboard.copied ? "Copied" : "Copy"}
							</Button>
						</Space>
					</Card>
				</Space>
			</div>
		</Form>
	);
};

export default Sorting;
