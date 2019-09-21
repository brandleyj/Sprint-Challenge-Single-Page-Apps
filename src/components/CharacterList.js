import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

function CharacterList(props) {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character")
			.then(response => {
				setCharacters(response.data.results);
				console.log(response.data.results);
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}, []);
	console.log("characters test", characters);
	return (
		<Cards>
			{characters.map(character => (
				<CharacterCard key={character.id} character={character} />
			))}
		</Cards>
	);
}
export default CharacterList;
