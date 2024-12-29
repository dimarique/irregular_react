import React from "react";
import styles from "./Nav.module.css"

function Nav() {
	return (
		<div className={styles.nav}>
			<a href="#">Unregelmäßige<br />Verben</a>
			<a href="#">Verben mit<br />Präpositionen</a>
		</div>
	)
}


export default Nav
