import { Button, Input } from "antd";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState("");

	const searchParams = useSearchParams("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		searchParams[1](`q=${query}`);
	};
	return (
		<div style={{ marginBottom: "20px" }}>
			<form onSubmit={handleSubmit}>
				<Input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="search ..."
					type="search"
					style={{ width: "400px", marginRight: "10px" }}
				/>

				<Button htmlType="submit">Search</Button>
			</form>
		</div>
	);
};

export default SearchBar;
