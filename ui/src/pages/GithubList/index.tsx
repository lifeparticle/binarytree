import { LoadingOutlined } from "@ant-design/icons";
import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getData } from "api/API";

const URL = `./github.json`;
const queryKey = "github";

function GithubList() {
	const { data, isLoading, isError } = useQuery({
		queryKey: [queryKey],
		queryFn: () => {
			return getData(URL);
		},
	});
	return (
		<div>
			{isLoading ? (
				<Spin
					indicator={
						<LoadingOutlined style={{ fontSize: 34 }} spin />
					}
				/>
			) : isError ? (
				<div>Something wrong</div>
			) : (
				<List
					items={data}
					resourceName="github"
					itemComponent={Resource}
				/>
			)}
		</div>
	);
}

export default GithubList;
