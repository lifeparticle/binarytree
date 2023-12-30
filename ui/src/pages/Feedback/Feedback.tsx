import { useState } from "react";
import style from "./Feedback.module.scss";
import { Skeleton } from "antd";
import { Footer } from "components/Layouts";

const AirtableEmbed = () => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<div className={style.feedback}>
				{loading && (
					<div className={style.feedback__skeletons}>
						<Skeleton active title paragraph={{ rows: 10 }} />
						<Skeleton.Input active />
						<Skeleton title active />
						<Skeleton active paragraph={{ rows: 10 }} />
						<Skeleton.Input active />
						<Skeleton active paragraph={{ rows: 10 }} />
						<Skeleton.Input active />
						<Skeleton active paragraph={{ rows: 10 }} />
						<Skeleton.Input active />
						<Skeleton.Button active />
					</div>
				)}

				<iframe
					title="Feedback Form"
					allow="fullscreen"
					className={`airtable-embed airtable-dynamic-height ${style.iframe}`}
					src="https://airtable.com/embed/appbcH1EyjqD8PXkK/shrm5RlUHdworbgSz?backgroundColor=blue"
					height="1949.375"
					onLoad={() => setLoading(false)}
				></iframe>
			</div>
			<Footer />
		</>
	);
};

export default AirtableEmbed;
