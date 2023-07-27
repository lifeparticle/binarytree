import { repositories } from "./data";

import ResourceList from "../../Components/ResourceList/ResourceList";

function GithubList() {
	return (
		<div>
			<ResourceList listData={repositories} />
		</div>
	);
}

export default GithubList;
