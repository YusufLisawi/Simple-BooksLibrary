import React from "react";
import "./Livre.css";

export default function Livre({ image, titre, prix }) {
	return (
		<div className="livre">
			<div className="livre__top">
				<img src={image} alt={titre} />
				<h2>{titre}</h2>
			</div>
			<div className="livre__bottom">
				<p>Prix : {prix}</p>
				<a href={image} target="blank">
					<button>Read more</button>
				</a>
			</div>
		</div>
	);
}
