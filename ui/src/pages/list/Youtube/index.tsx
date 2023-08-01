import List from "components/Hoc/List/List";
import { programmingChannels } from "./data";
import Resource from "components/General/ListItems/Resource/Resource";

const YouTubeList: React.FC = () => {
	return (
		<>
			<List
				items={programmingChannels}
				resourceName={"Youtube"}
				itemComponent={Resource}
			/>
		</>
	);
};

export default YouTubeList;
