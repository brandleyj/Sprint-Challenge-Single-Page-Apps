import React, { useState } from "react";

function SearchForm({ onSearch }) {
	const [findName, setFindName] = useState({
		name: ""
	});

	const handleInputChange = e => {
		setFindName({ ...findName, name: event.target.value });
	};

	return (
		<section className="search-form">
			<form onSubmit={() => onSearch(findName)}>
				<input
					onChange={handleInputChange}
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
