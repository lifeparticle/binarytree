import { HelpEntry } from "data/helpData";
import React from "react";

interface HelpProps {
	helpObject: HelpEntry;
}

const Help: React.FC<HelpProps> = ({ helpObject }) => {
	return (
		<div>
			<p>{helpObject.description}</p>
			{helpObject.helpTexts.map((helpText, index) => (
				<div key={index}>
					<h4>{helpText.title}</h4>
					<ul>
						{helpText.bulletPoints.map((bulletPoint, bpIndex) => (
							<li key={bpIndex}>{bulletPoint}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Help;
