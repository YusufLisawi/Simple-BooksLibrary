import React from "react";
import Livre from "./Livre";
import "./Livres.css";
export default function Livres({ array }) {
	return (
		<div className="livres">
			{array.map((livre) => (
				<Livre
					image={livre.url}
					titre={livre.titre}
					prix={livre.prix}
				/>
			))}
		</div>
	);
}
