import style from "./Sorting.module.scss";
import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { sortData } from "./utils/helper";
import { Button, Input, Space, Segmented, Select } from "antd";
const { TextArea } = Input;

import { Typography } from "antd";

const { Title } = Typography;

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
		<div className={style.sort}>
			<Space direction="vertical">
				<TextArea
					placeholder="Enter number or character by space or comma or new Line"
					value={input}
					rows={10}
					onChange={(event) => {
						setInput(event.currentTarget.value);
					}}
				/>

				<Space>
					<Button onClick={() => inputClipBoard.copy(input)}>
						{inputClipBoard.copied ? "Copied" : "Copy"}
					</Button>

					<Button onClick={() => setInput("")}>Clear</Button>
				</Space>
			</Space>
			<Space direction="vertical">
				<Title level={4}>Order</Title>
				<Segmented
					className={style.base__buttons_segment}
					value={order}
					onChange={(value: string | number) =>
						setOrder(value as string)
					}
					options={[
						{ label: "Ascending", value: "Ascending" },
						{ label: "Descending", value: "Descending" },
					]}
				/>

				<TextArea
					placeholder="output"
					value={output}
					rows={10}
					readOnly
				/>

				<Select
					defaultActiveFirstOption
					placeholder="Separate results by line breaks"
					style={{ width: "100%" }}
					onChange={(value) => setOutputFormat(value)}
					options={[
						{
							value: "\n",
							label: "Separate results by line breaks",
						},
						{
							value: " ",
							label: "Separate results by line commas",
						},
						{
							value: ",",
							label: "Separate results by line spaces",
						},
					]}
				/>

				<Space>
					<Button onClick={() => clipboard.copy(output)}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Space>
			</Space>
		</div>
	);
};

export default Sorting;
