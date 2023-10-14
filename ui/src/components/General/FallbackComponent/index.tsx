import { Alert, Button, Card } from "antd";
import React from "react";

const FallbackComponent: React.FC = () => {
	return (
		<Card style={{ width: "500px" }}>
			<Alert
				message={"Something went wrong"}
				description={
					<>
						<Button
							onClick={() =>
								window.location.assign(window.location.pathname)
							}
						>
							Refresh
						</Button>
					</>
				}
				type="error"
				showIcon
			/>
		</Card>
	);
};

export default FallbackComponent;
