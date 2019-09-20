import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {
	const [characters, setCharacters] = useState({});

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				setCharacters(response.data.results);
				console.log(response.data.results);
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}, []);
	return (
		<div>
			<CharacterCard charData={characters} />
		</div>
	);
}
export default CharacterList;
