import { useSearchParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FC } from "react";
import { ResponsiveInputWithLabel } from "components/General";
import { Form } from "antd";

const MimeSearch: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [queryParams, setQueryParams] = useState({
		q: searchParams.get("type") || "",
	});

	const { q: searchQuery } = queryParams;

	useEffect(() => {
		setSearchParams(`?type=${searchQuery}`);
	}, [searchQuery, setSearchParams]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQueryParams((prevParams) => ({ ...prevParams, q: value }));
	};

	return (
		<Form layout="vertical">
			<ResponsiveInputWithLabel
				label="Search Table"
				type="text"
				placeholder="Search by Name or Content-type..."
				value={searchQuery}
				onChange={handleSearchChange}
			/>
		</Form>
	);
};

export default MimeSearch;
