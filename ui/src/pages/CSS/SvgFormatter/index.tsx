import { Card, Form, Input } from "antd";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";
import PageGrid from "components/Layouts/PageGrid";
import React, { ChangeEvent, useState } from "react";
import { combineSVGPaths } from "./utils/helper";
import style from "./SvgFormatter.module.scss";

const { TextArea } = Input;

const SvgFormatter: React.FC = () => {
	const [inputSVG, setInputSVG] = useState("");
	const [outputSVG, setOutputSVG] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		setInputSVG(newValue);

		const combinedSvgOutput = combineSVGPaths(newValue);
		setOutputSVG(combinedSvgOutput);
	};
	return (
		<PageGrid>
			<div className={style.svgformatter__left}>
				<Card>
					<Form layout="vertical">
						<Form.Item label="Svg Input">
							<TextArea
								placeholder="Enter svg value"
								value={inputSVG}
								rows={10}
								onChange={handleChange}
								data-gramm={false}
								allowClear
							/>
						</Form.Item>
					</Form>
				</Card>

				{inputSVG && (
					<Card>
						<div dangerouslySetInnerHTML={{ __html: inputSVG }} />
					</Card>
				)}
			</div>

			{inputSVG && outputSVG && (
				<div className={style.svgformatter__right}>
					<Card className={style.svgformatter__right__code}>
						<CodeHighlightWithCopy
							language="css"
							codeString={outputSVG}
						/>
					</Card>

					<Card>
						<div dangerouslySetInnerHTML={{ __html: outputSVG }} />
					</Card>
				</div>
			)}
		</PageGrid>
	);
};

export default SvgFormatter;
