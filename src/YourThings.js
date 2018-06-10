import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class YourThings extends Component {

	ButtonClick = () => {

		this.setState({
			clicks: this.state.clicks + 1
		});

		// let attribute = YourThings.getAttributeObjectByAttribute(e.target.id);
		//
		// if (attribute != null) {
		// 	attribute.value++;
		// 	// YourThings.setState({
		// 	// 	attributes: YourThings.state.attributes;
		// 	// })
		// }

	};

	constructor(props) {

		super(props);

		this.state = {
			clicks: 0
		};

	}

	render() {
		return (
			<div>
				<div>
					<Button onClick={this.ButtonClick}>Click Here</Button>
					<br/>
					<h2>{ this.state.clicks }</h2>
				</div>
				<br/>
				{/*<div>*/}
					{/*{YourThings.attributes.map(function(attribute, index) {*/}
						{/*return <div key={index}><p id={attribute.attribute} key={index}>{attribute.attribute} : {attribute.value}</p></div>;*/}
					{/*})}*/}
				{/*</div>*/}
				{/*<br/>*/}
				{/*<div>*/}
					{/*{YourThings.things.map(function(thing, index) {*/}
						{/*return <div key={index}><button id={thing.name} key={index} onClick={this.ButtonClick}>{thing.displayValue}</button><br/></div>;*/}
					{/*})}*/}
				{/*</div>*/}
			</div>
		);
	}

}

export default YourThings;
