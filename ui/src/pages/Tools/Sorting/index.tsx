import style from "./Sorting.module.scss";
import { useEffect, useState } from "react";
import { sortData } from "./helper";
import { Input, Form, Card, Badge, Row, Col } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { PageGrid, CopyInput } from "components/Layouts";
import {
	Warning,
	ResponsiveSegementWithLabel,
	ResponsiveSelectWithLabel,
} from "components/General";
import { DataDetection } from "utils/helper-classes/DataDetection";
import { ClipboardButton } from "components/InjectedComponent";

const { TextArea } = Input;

const OUTPUT_FORMAT = [
	{
		value: "\n",
		label: "Separate results by new lines",
	},
	{
		value: ",",
		label: "Separate results by line commas",
	},
	{
		value: " ",
		label: "Separate results by line spaces",
	},
];

const detection = new DataDetection(["number", "string", "array"]);

const Sorting: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [outputFormat, setOutputFormat] = useState(OUTPUT_FORMAT[0]);
	const [order, setOrder] = useState("Ascending");
	const [dataType, setDataType] = useState("");

	useEffect(() => {
		detection.setData(input, true);
		const dT = detection.detect();
		const sortedData = sortData(detection.formatData(input), order, dT);
		setOutput(sortedData.join(outputFormat.value));
		setDataType(dT);
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
							className={style.sort__input_textarea}
							onChange={(event) => {
								setInput(event.currentTarget.value);
							}}
							data-gramm={false}
							allowClear
						/>
					</Form.Item>
				</Card>

				<Card className={style.sort__output}>
					{output === "" ? (
						<Warning text="There is no data for sorting, please provide data first." />
					) : (
						<>
							<Row gutter={[16, 16]}>
								<Col xs={24} sm={24} lg={24} xl={24} xxl={12}>
									<ResponsiveSegementWithLabel
										label={"Order"}
										value={order}
										onChange={(value: string | number) =>
											setOrder(value as string)
										}
										options={[
											{
												label: "Ascending",
												value: "Ascending",
											},
											{
												label: "Descending",
												value: "Descending",
											},
										]}
									/>
								</Col>
								<Col xs={24} sm={24} lg={24} xl={24} xxl={12}>
									<CopyInput>
										<ResponsiveSelectWithLabel
											label="Output separator"
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
								</Col>
							</Row>
							<Form.Item label="Sorted output">
								<TextArea
									placeholder="output"
									value={output}
									className={style.sort__output_textarea}
									readOnly
									data-gramm={false}
								/>
							</Form.Item>
						</>
					)}
				</Card>
			</PageGrid>
		</Form>
	);
};

export default Sorting;
