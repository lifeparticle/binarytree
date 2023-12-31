import { Card, Form, Input } from "antd";
import { Warning, CodeHighlightWithCopy } from "components/General";
import { PageGrid } from "components/Layouts";
import { ChangeEvent, FC, useState } from "react";
import { combineSVGPaths } from "./helper";
import style from "./Svg.module.scss";
import SVGRenderer from "./components/SVGRenderer";

const { TextArea } = Input;

const Svg: FC = () => {
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

				<Card>
					{inputSVG.length > 0 ? (
						<SVGRenderer svgString={inputSVG} />
					) : (
						<Warning text="There is no data for SVG, please provide data first." />
					)}
				</Card>
			</div>

			<div className={style.svgformatter__right}>
				<Card className={style.svgformatter__right__code}>
					{outputSVG.length > 0 &&
					outputSVG !== "Error combining SVG paths." ? (
						<CodeHighlightWithCopy
							language="css"
							codeString={
								outputSVG.split(">").slice(0, -1).join(">\n") +
								">" +
								outputSVG.split(">").slice(-1)
							}
						/>
					) : (
						<Warning text="There is no data for SVG, please provide data first." />
					)}
				</Card>
				<Card>
					{outputSVG.length > 0 &&
					outputSVG !== "Error combining SVG paths." ? (
						<SVGRenderer svgString={outputSVG} />
					) : (
						<Warning text="There is no data for SVG, please provide data first." />
					)}
				</Card>
			</div>
		</PageGrid>
	);
};

export default Svg;
