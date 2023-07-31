import { programmingChannels } from "./data";
import ResourceList from "components/Hoc/List";

const YouTubeList: React.FC = () => {
	return (
		<>
			<ResourceList listData={programmingChannels} />
		</>
	);
};

export default YouTubeList;
