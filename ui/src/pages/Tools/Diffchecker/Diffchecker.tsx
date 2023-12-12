import { Card, Form, Input } from "antd";
import { PageGrid } from "components/Layouts";
import { useState, FC } from "react";
import { diffLines, Change } from "diff";
import { ResponsiveButton } from "components/General";
import style from "./Diffchecker.module.scss";
import { classNames } from "utils/helper-functions/string";

const { TextArea } = Input;

const Diffchecker: FC = () => {
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
						<pre>
							{lineDifferences
								.filter((part) => !part.added)
								.map((part) => (
									<span
										key={crypto.randomUUID()}
										className={classNames(
											style.diffchecker__part,
											part.removed
												? style.diffchecker__removed
												: ""
										)}
									>
										{part.value}
									</span>
								))}
						</pre>
					</Card>
				)}

				{lineDifferences.length > 0 && (
					<Card title="Change text output">
						<pre>
							{lineDifferences
								.filter((part) => !part.removed)
								.map((part) => (
									<span
										key={crypto.randomUUID()}
										className={classNames(
											style.diffchecker__part,
											part.added
												? style.diffchecker__added
												: ""
										)}
									>
										{part.value}
									</span>
								))}
						</pre>
					</Card>
				)}
			</PageGrid>
		</>
	);
};

export default Diffchecker;
