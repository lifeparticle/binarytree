import { Card, Form, Input } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { useState } from "react";
import { diffLines, Change } from "diff";
import { ResponsiveButton } from "components/General/FormComponents";
import style from "./Diffchecker.module.scss";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";

const { TextArea } = Input;

const Diffchecker: React.FC = () => {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");
	const [lineDifferences, setLineDifferences] = useState<Change[]>([]);

	const calculateDiff = () => {
		const lineDiff = diffLines(text1, text2);
		setLineDifferences(lineDiff);
	};

	return (
		<>
			<PageGrid>
				<Card>
					<Form layout="vertical">
						<Form.Item label="Original text">
							<TextArea
								value={text1}
								rows={7}
								onChange={(e) => setText1(e.target.value)}
								data-gramm={false}
								allowClear
							/>
						</Form.Item>
					</Form>
				</Card>
				<Card>
					<Form layout="vertical">
						<Form.Item label="Changed text">
							<TextArea
								value={text2}
								rows={7}
								onChange={(e) => setText2(e.target.value)}
								data-gramm={false}
								allowClear
							/>
						</Form.Item>
					</Form>
				</Card>
			</PageGrid>
			<div className={style.diffchecker__button}>
				<ResponsiveButton onClick={calculateDiff}>
					Find Difference
				</ResponsiveButton>
			</div>

			<PageGrid>
				{lineDifferences.length > 0 && (
					<Card title="Original text output ">
						<div>
							<pre>
								{lineDifferences
									.filter((part) => !part.added)
									.map((part, index) => (
										<span
											key={index}
											style={{
												backgroundColor: part.removed
													? "salmon"
													: "white",
											}}
										>
											{part.value}
										</span>
									))}
							</pre>
						</div>
					</Card>
				)}

				{lineDifferences.length > 0 && (
					<Card title="Change text output">
						<div>
							<pre lang={"js"}>
								{lineDifferences
									.filter((part) => !part.removed)
									.map((part, index) => (
										<span
											key={index}
											style={{
												backgroundColor: part.added
													? "lightgreen"
													: "white",
											}}
										>
											{part.value}
										</span>
									))}
							</pre>
						</div>
					</Card>
				)}
			</PageGrid>
		</>
	);
};

export default Diffchecker;
