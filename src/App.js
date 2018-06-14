import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Board from "./Board";

class App extends Component {

	render() {

		document.body.style.backgroundColor = "#5D6D7E";

		return (
			<Grid columns={3} divided>
				<Grid.Row></Grid.Row>
				<Grid.Row>
					<Grid.Column></Grid.Column>
					<Grid.Column><Board/></Grid.Column>
					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
