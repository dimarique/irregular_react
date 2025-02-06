import React from "react";
import styles from "./Card.module.css"

const Card = () => {
	const verbformen = ['Infinitiv', '3. Sg. Präsens', '3. Sg. Präteritum', '3. Sg. Perfect', 'Übersetzung']
	return (
		<div className={styles.test}>
			{verbformen.map((verbform) => (
				<div key={verbform}
					className={styles.card__verbform}>
					{verbform}
				</div>
			))}
		</div>
	)
}
export default Card
