import { Card, Form, Input } from "antd";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import PageGrid from "components/Layouts/PageGrid";
import React, { ChangeEvent, useState } from "react";
import { combineSVGPaths } from "./utils/helper";

const { TextArea } = Input;

const SvgFormatter: React.FC = () => {
	const [value, setValue] = useState("");
	const [combinedSVG, setCombinedSVG] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		setValue(newValue);

		const combinedSvgOutput = combineSVGPaths(newValue);
		setCombinedSVG(combinedSvgOutput);
	};
	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<Form.Item label="Svg Input">
						<TextArea
							placeholder="Enter svg value"
							value={value}
							rows={10}
							onChange={handleChange}
							data-gramm={false}
							allowClear
						/>
					</Form.Item>
				</Form>
			</Card>
			<Card>
				<CodeHighlightWithCopy
					language="css"
					codeString={combinedSVG}
				/>
			</Card>
		</PageGrid>
	);
};

export default SvgFormatter;
