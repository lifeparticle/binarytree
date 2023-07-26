import { repositories } from "./data";

import ResourceList from "../../atoms/ResourceList";

function GithubList() {
	return (
		<div>
			<ResourceList listData={repositories} />
		</div>
	);
}

export default GithubList;
