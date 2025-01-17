import React from "react";
import styles from "./VerbFormRow.module.css"


function VerbFormRow() {
	return (
		<div className={styles.rowContainer}>
			<div className={styles.rowContainer__row}>left</div>
			<div className={styles.rowContainer__row}>right</div>
		</div>
	)
}


export default VerbFormRow
