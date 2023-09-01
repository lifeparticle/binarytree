import { useState } from "react";
import style from "./Feedback.module.scss";
import { Skeleton } from "antd";

const AirtableEmbed = () => {
	const [loading, setLoading] = useState(true);

	return (
		<div className={style.feedback}>
			{loading && (
				<div className={style.feedback__skeleton}>
					<Skeleton title paragraph={{ rows: 10 }} />
					<Skeleton.Input />
					<Skeleton title />
					<Skeleton paragraph={{ rows: 10 }} />
					<Skeleton.Input />
					<Skeleton paragraph={{ rows: 10 }} />
					<Skeleton.Input />
					<Skeleton paragraph={{ rows: 10 }} />
					<Skeleton.Input />
					<Skeleton.Button />
				</div>
			)}

			<iframe
				className="airtable-embed airtable-dynamic-height"
				src="https://airtable.com/embed/appbcH1EyjqD8PXkK/shrm5RlUHdworbgSz?backgroundColor=blue"
				height="1949.375"
				width="85%"
				style={{
					background: "transparent",
					border: "1px solid #ccc",
					display: loading ? "none" : "block",
				}}
				onLoad={() => setLoading(false)}
			></iframe>
		</div>
	);
};

export default AirtableEmbed;
