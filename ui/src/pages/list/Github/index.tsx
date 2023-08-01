import { repositories } from "./data";
import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";

function GithubList() {
	return (
		<div>
			<List
				items={repositories}
				resourceName="github"
				itemComponent={Resource}
			/>
		</div>
	);
}

export default GithubList;
