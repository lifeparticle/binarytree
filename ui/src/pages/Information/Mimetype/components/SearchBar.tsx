import { useSearchParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import { Form } from "antd";

const MimeSearch: React.FC = () => {
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
				label="Search bar"
				type="text"
				placeholder="Search by Mimetype..."
				value={searchQuery}
				onChange={handleSearchChange}
			/>
		</Form>
	);
};

export default MimeSearch;
