import { Alert, Button, Card } from "antd";
import React from "react";
import style from "./FallbackComponent.module.scss";

const FallbackComponent: React.FC = () => {
	return (
		<Card className={style.fallback}>
			<Alert
				message={"Something went wrong"}
				description={
						<Button
							onClick={() =>
								window.location.assign(window.location.pathname)
							}
						>
							Refresh
						</Button>
				}
				type="error"
				showIcon
			/>
		</Card>
	);
};

export default FallbackComponent;
