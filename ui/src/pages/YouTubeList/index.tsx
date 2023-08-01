import { LoadingOutlined } from "@ant-design/icons";
import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getData } from "api/API";

const URL = `./youtube.json`;
const queryKey = "youtube";

function YoutubeList() {
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
					resourceName="youtube"
					itemComponent={Resource}
				/>
			)}
		</div>
	);
}

export default YoutubeList;
