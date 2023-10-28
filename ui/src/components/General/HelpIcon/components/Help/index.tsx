import { HelpEntry } from "data/helpData";
import React from "react";

interface HelpProps {
	helpObject: HelpEntry;
}
const Help: React.FC<HelpProps> = ({ helpObject }) => {
	return <h1>{helpObject.description}</h1>;
};

export default Help;
