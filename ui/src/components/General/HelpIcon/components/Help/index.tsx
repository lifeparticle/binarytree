import React from "react";

interface indexProps {
	text: string;
}

const Help: React.FC<indexProps> = ({ text }) => {
	return <h1>{text}</h1>;
};

export default Help;
