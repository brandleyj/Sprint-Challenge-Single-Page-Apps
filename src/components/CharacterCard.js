import React from "react";
import styled from "styled-components";

const Card = styled.div`
	margin: 40px;
	max-width: 300px;
`;

function CharacterCard(props) {
	const { image, name, status, species } = props.character;
	console.log("character card", props);
	return (
		<Card>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<p>Status: {status}</p>
			<p>Species: {species}</p>
		</Card>
	);
}

export default CharacterCard;
