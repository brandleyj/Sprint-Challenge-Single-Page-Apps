import React, { useState } from "react";

function SearchForm({ onSearch }) {
	const [findName, setFindName] = useState({
		name: ""
	});

	const handleOnChange = e => {
		setFindName({ ...findName, name: e.target.value });
	};

	return (
		<section className="search-form">
			<form onSubmit={() => onSearch(findName)}>
				<input
					onChange={handleOnChange}
					placeholder="Name"
					value={findName.name}
					name="name"
				/>
				<button type="submit">Search</button>
			</form>
		</section>
	);
}

export default SearchForm;
