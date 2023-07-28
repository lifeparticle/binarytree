import ResourceList from "Components/ResourceList";
import { repositories } from "./data";

function GithubList() {
	return (
		<div>
			<ResourceList listData={repositories} />
		</div>
	);
}

export default GithubList;
