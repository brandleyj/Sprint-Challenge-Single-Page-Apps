import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

function App() {
	return (
		<main>
			<Link to="/">Home</Link>
			<Link to="/characters">Characters</Link>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route exact path="/characters" component={CharacterList} />
		</main>
	);
}

export default App;
