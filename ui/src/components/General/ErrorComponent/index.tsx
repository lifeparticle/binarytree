import { Alert, Card } from "antd";
import React from "react";

interface ErrorComponentProps {
	category: string;
	reasons: string[];
	solutions: string[];
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
	reasons,
	solutions,
	category,
}) => {
	return (
		<Card title={category}>
			<Alert
				message={"Reason"}
				description={
					<>
						{reasons.map((reason) => (
							<div key={reason}>{reason}</div>
						))}
					</>
				}
				type="error"
				showIcon
			/>
			<br />
			<Alert
				message="Solution"
				description={
					<>
						{solutions.map((solution) => (
							<div key={solution}>{solution}</div>
						))}
					</>
				}
				type="success"
				showIcon
			/>
		</Card>
	);
};

export default ErrorComponent;
