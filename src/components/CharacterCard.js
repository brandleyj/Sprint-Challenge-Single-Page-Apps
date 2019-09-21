import React from "react";

function CharacterCard(props) {
	const { image, name, status, species } = props.character;
	console.log("character card", props);
	return (
		<div>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<p>{status}</p>
			<p>{species}</p>
		</div>
	);
}

export default CharacterCard;
