import React from "react";
import Nav from "./Nav/Nav"
import Button from "./Button/Button";

function Page(props) {
	return <div>
		<Nav />
		<div className="buttons">
			<Button text='testen' />
			<Button text='nächste' />
		</div>
	</div>
}

export default Page
