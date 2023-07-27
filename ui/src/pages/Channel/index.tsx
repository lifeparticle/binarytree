import { programmingChannels } from "./data";

import ChannelList from "../../atoms/ResourceList";

function Channel() {
	return (
		<div>
			<ChannelList listData={programmingChannels} />
		</div>
	);
}

export default Channel;
