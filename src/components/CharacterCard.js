import React from "react";

function CharacterCard(props) {
	const charData = props.charData;
	return (
		<div>
			{charData.map(character => {
				return (
					<div>
						<h1>{character.name}</h1>
						<p>{character.status}</p>
						<p>{character.species}</p>
					</div>
				);
			})}
		</div>
	);
}

export default CharacterCard;
