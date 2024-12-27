import React, { useState } from "react";
import styles from "./Button.module.css"

function Button(props) {
	//const [count, setCount] = useState(0);
	//const increment = () => {
	//setCount(count + 1)
	//}
	return (
		<button className={styles.buttons__button}>
			{props.text}
		</button>
	)
}


export default Button;
