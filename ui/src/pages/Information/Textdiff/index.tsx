import { Card, Form, Input } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { useState } from "react";

import { diffChars, Change } from "diff";
import { ResponsiveButton } from "components/General/FormComponents";
import style from "./Textdiff.module.scss";

const { TextArea } = Input;

const Textdiff: React.FC = () => {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");
	const [differences, setDifferences] = useState<Change[]>([]);

	const calculateDiff = () => {
		const diff = diffChars(text1, text2);
		setDifferences(diff);
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
			<div className={style.textdiff__button}>
				<ResponsiveButton onClick={calculateDiff}>
					Find Difference
				</ResponsiveButton>
			</div>

			{differences.length > 0 && (
				<Card>
					<h2>Differences:</h2>
					<div>
						{differences?.map((part, index) => (
							<span
								key={index}
								style={{
									backgroundColor: part.added
										? "lightgreen"
										: part.removed
										? "salmon"
										: "white",
								}}
							>
								{part.value}
							</span>
						))}
					</div>
				</Card>
			)}
		</>
	);
};

export default Textdiff;
