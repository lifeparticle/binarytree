import { programmingChannels } from "./data";
import ChannelList from "Components/ResourceList";

const YouTubeList: React.FC = () => {
	return (
		<>
			<ChannelList listData={programmingChannels} />
		</>
	);
};

export default YouTubeList;
