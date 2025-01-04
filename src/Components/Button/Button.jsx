import React, { useState } from "react";
import styles from "./Button.module.css"

//function Button(props) {
const Button = (props) => {
	return (
		<button className={styles.buttons__button}>
			{props.text}
		</button>
	)
}


export default Button;
