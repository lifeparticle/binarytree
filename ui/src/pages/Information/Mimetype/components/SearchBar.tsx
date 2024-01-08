import { useState, useEffect, FC } from "react";
import { ResponsiveInputWithLabel } from "components/General";
import { Form } from "antd";
import useParamsValue from "hooks/useParamsValue";
import { PARAMS } from "data/paramsData";

const MimeSearch: FC = () => {
	const { searchParams, updateParamsValue } = useParamsValue({});

	const [queryParams, setQueryParams] = useState(
		searchParams.get(PARAMS.type) || ""
	);

	useEffect(() => {
		updateParamsValue(PARAMS.type, queryParams);
	}, [queryParams, updateParamsValue]);

	return (
		<Form layout="vertical">
			<ResponsiveInputWithLabel
				label="Search Table"
				type="text"
				placeholder="Search by Name or Content-type..."
				value={queryParams}
				onChange={(e) => setQueryParams(e.target.value)}
			/>
		</Form>
	);
};

export default MimeSearch;
