import React from "react";
import Nav from "./Nav/Nav"
import Button from "./Button/Button";
import Card from "./Card/Card";
import VerbFormRow from "./VerbFormRow/VerbFormRow";


function Page(props) {
	return <>
		<Nav />
		<Card />
		<VerbFormRow />
		<div className="buttons">
			<Button text='testen' />
			<Button text='nächste' />
		</div>
	</>
}

export default Page
