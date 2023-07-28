import { programmingChannels } from "./data";
import ResourceList from "components/ResourceList";

const YouTubeList: React.FC = () => {
	return (
		<>
			<ResourceList listData={programmingChannels} />
		</>
	);
};

export default YouTubeList;
