import React from 'react';
import './App.css';


const NewThing =
	({
		 text,
		 moreText
	}) =>
		<div>
			<div>
				{text}
			</div>
			<div>
				{moreText}
			</div>
		</div>;

export default NewThing;