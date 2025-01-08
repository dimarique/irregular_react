import React from "react";
import styles from "./Nav.module.css"

function Nav() {
	return (
		<div className={styles.nav}>
			<a className={styles.nav__left} href="#">Unregelmäßige<br />Verben</a>
			<a className={styles.nav__right} href="#">Verben mit<br />Präpositionen</a>
		</div>
	)
}


export default Nav
