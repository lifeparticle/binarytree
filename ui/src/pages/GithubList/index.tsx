import ResourceList from "components/Hoc/List";
import { repositories } from "./data";

function GithubList() {
	return (
		<div>
			<ResourceList listData={repositories} />
		</div>
	);
}

export default GithubList;
