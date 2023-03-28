import style from "./Sorting.module.scss";
import { Group, SegmentedControl, Textarea } from "@mantine/core";
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { sortData } from "./util";

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
				<SegmentedControl
					className={style.base__buttons_segment}
					styles={(theme) => ({
						root: {
							backgroundColor:
								theme.colorScheme === "dark"
									? theme.colors.dark[3]
									: "#228be6",
						},
					})}
					value={order}
					onChange={setOrder}
					data={[
						{ label: "Ascending", value: "Ascending" },
						{ label: "Descending", value: "Descending" },
					]}
				/>
				<Textarea
					mt="xl"
					placeholder=""
					label="Input"
					value={data}
					maxRows={43}
					minRows={43}
					onChange={(event) => {
						setData(event.currentTarget.value);
					}}
				/>
			</div>
			<div>
				<Group>
					<Button onClick={() => clipboard.copy("")}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Group>

				<Textarea
					mt="xl"
					label="Output"
					value={output}
					maxRows={43}
					minRows={43}
					readOnly
				/>
			</div>
		</div>
	);
};

export default Sorting;
