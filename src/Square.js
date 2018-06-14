import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class Square extends Component {

	render() {

		return (
			<Button content={"\u00D7"} textAlign='center'/>
		);
	}

}

export default Square;
