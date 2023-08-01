import List from "components/Hoc/List/List";
import { iconsList } from "./data";
import Resource from "components/General/ListItems/Resource/Resource";

const IconList: React.FC = () => {
	return (
		<>
			<List
				items={iconsList}
				itemComponent={Resource}
				resourceName="icons"
			/>
		</>
	);
};

export default IconList;
