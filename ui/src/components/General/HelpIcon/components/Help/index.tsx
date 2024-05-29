import CodeEditor from "components/General/CodeEditor";
import { HelpEntry } from "data/helpData";
import { FC } from "react";

interface HelpProps {
	helpObject: HelpEntry;
}

const Help: FC<HelpProps> = ({ helpObject }) => {
	return (
		<div>
			<p>{helpObject.description}</p>
			{helpObject.helpTexts.map(({ id, title, bulletPoints }) => (
				<div key={id}>
					<h4>{title}</h4>
					<ul>
						{bulletPoints.map((bulletPoint) => {
							if (bulletPoint.dataType === "text") {
								return (
									<li key={crypto.randomUUID()}>
										{bulletPoint.data}
									</li>
								);
							}

							return (
								<li key={crypto.randomUUID()}>
									<CodeEditor
										label=""
										value={bulletPoint.data}
										language="csharp"
									/>
								</li>
							);
						})}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Help;
