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
						{bulletPoints.map((bulletPoint) => (
							<li key={crypto.randomUUID()}>{bulletPoint}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Help;
