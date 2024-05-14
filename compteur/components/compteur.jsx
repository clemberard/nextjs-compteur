import { useState } from "react";
import styles from "@/styles/Home.module.css";

function displayCount() {
	const [count, setCount] = useState(0);
	return (
		<>
			<button className={styles.bouton} onClick={() => setCount(count + 1)}>
				Clique sur moi pour incrémenter
			</button>
			<button className={styles.bouton} onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
				Clique sur moi pour décrémenter
			</button>
			<button className={styles.bouton} onClick={() => setCount(0)}>
				Tu veux me reset ? &#128546;
			</button>
			<p>Voici le nombre de clics : {count}</p>
		</>
	);
}

export { displayCount };
