import style from "./Sorting.module.scss";
import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { sortData } from "./utils/helper";
import { Button, Input, Space, Segmented } from "antd";
const { TextArea } = Input;

const Sorting: React.FC = () => {
	const [data, setData] = useState("");
	const [output, setOutput] = useState("");
	const [order, setOrder] = useState("Ascending");
	const clipboard = useClipboard({ timeout: 500 });

	useEffect(() => {
		const sortedData = sortData(data.split("\n"), order);
		setOutput(sortedData.join("\n"));
	}, [data, order]);

	return (
		<div className={style.sort}>
			<Space direction="vertical">
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
					placeholder=""
					value={data}
					rows={43}
					onChange={(event) => {
						setData(event.currentTarget.value);
					}}
				/>
			</Space>
			<Space direction="vertical">
				<Button onClick={() => clipboard.copy(output)}>
					{clipboard.copied ? "Copied" : "Copy"}
				</Button>
				<TextArea value={output} rows={43} readOnly />
			</Space>
		</div>
	);
};

export default Sorting;
