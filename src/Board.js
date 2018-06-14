import React, { Component } from 'react';
import {Grid, Container, Image} from 'semantic-ui-react';

import whiteSquare from './images/whiteSquare.png';

import './Board.css';

class Board extends Component {

	// ButtonClick = (e) => {
	//
	// 	let buttonId = e.target.id;
	//
	// 	switch (buttonId) {
	// 		case "btn-code":
	// 			this.setState({
	// 					linesOfCode: this.state.linesOfCode + 1
	// 				},
	// 				function() {
	// 					if (this.state.linesOfCode >= 10) {
	// 						this.setState({
	// 							showDevelopers: true
	// 						});
	// 					}
	// 				});
	// 			break;
	//
	// 		case "btn-dev":
	// 			this.setState({
	// 				developers: this.state.developers + 1
	// 			});
	// 			break;
	//
	// 		default:
	// 			break;
	// 	}
	//
	// };

	constructor(props) {

		super(props);

		this.state = {
			isClicked : false
		};

	}

	clickSquare = () => {
		this.setState({
			isClicked: true
		}, function() {
			setTimeout(function() {
				this.setState({
					isClicked: false
				});
			}.bind(this), 400);
		});
		console.log("click");
	};

	generateOppositeGrid() {

		let grid = [];

		let rows = 4;
		let cols = 4;

		let childRows = [];

		let imageClasses = ['clickImage', this.state.isClicked ? 'bounceIn' : 'bounceOut'].join(' ');

		for (let i = 0; i < cols; i++) {
			let childCols = [];
			for (let j = 0; j < rows; j++) {
				childCols.push(<Grid.Column style={{padding: 0}} key={j}>
									<Image src={whiteSquare} onClick={this.clickSquare} key={i + ' ' + j}
										className={imageClasses}
									/>
								</Grid.Column>);
			}
			childRows.push(<Grid.Row key={i}>{childCols}</Grid.Row>);
		}

		grid.push(<Grid celled centered columns={4} key={'grid'}>{childRows}</Grid>);

		return grid;
	}

	render() {
		return (
			<Container style={{width: 400, height: 400}}>
				{/*{this.generateGrid()}*/}
				{/*<br/>*/}
				{this.generateOppositeGrid()}
			</Container>
		);
	}

}

export default Board;
