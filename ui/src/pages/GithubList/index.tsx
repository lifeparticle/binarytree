import ResourceList from "components/ResourceList";
import { repositories } from "./data";

function GithubList() {
	return (
		<div>
			<ResourceList listData={repositories} />
		</div>
	);
}

export default GithubList;
