import style from "./Sorting.module.scss";
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { sortData } from "./util";
import { Input, Space, Segmented } from "antd";
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
		<div className={style.toc}>
			<div>
				<Segmented
					className={style.base__buttons_segment}
		
					value={order}
					onChange={(value: string | number) => setOrder(value as string)}
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
			</div>
			<div>
				<Space>
					<Button onClick={() => clipboard.copy(output)}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Space>

				<TextArea
					value={output}
					rows={43}
					readOnly
				/>
			</div>
		</div>
	);
};

export default Sorting;
