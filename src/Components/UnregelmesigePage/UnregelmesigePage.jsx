import React from "react";
import Nav from "./../Nav/Nav"
import Button from "./../Button/Button";
import Card from "./../Card/Card";


function Page(props) {
	return <>
		<Nav />
		<Card />
		<div className="buttons">
			<Button text='testen' />
			<Button text='nächste' />
		</div>
	</>
}

export default Page
