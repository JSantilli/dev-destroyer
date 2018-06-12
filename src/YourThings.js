import React, { Component } from 'react';
import {
	Container,
	Button,
	List,
	Statistic
} from 'semantic-ui-react';

class YourThings extends Component {

	ButtonClick = (e) => {

		let buttonId = e.target.id;

		switch (buttonId) {
			case "btn-code":
				this.setState({
					linesOfCode: this.state.linesOfCode + 1
				},
				function() {
					if (this.state.linesOfCode >= 10) {
						this.setState({
							showDevelopers: true
						});
					}
				});
				break;

			case "btn-dev":
				this.setState({
					developers: this.state.developers + 1
				});
				break;

			default:
				break;
		}

	};

	constructor(props) {

		super(props);

		this.state = {
			linesOfCode	: 0,
			developers	: 0,
			showDevelopers : false
		};

	}

	render() {

		document.body.style.backgroundColor = "#5D6D7E";

		return (
			<div>
				<Container style={{marginTop: "20px"}}>
					<List>
						<List.Item>
							<Statistic>
								<Statistic.Value>{this.state.linesOfCode}</Statistic.Value>
								<Statistic.Label>Lines of Code</Statistic.Label>
							</Statistic>
							<br/>
							<Button id={"btn-code"} onClick={this.ButtonClick}>Code</Button>
						</List.Item>
						{this.state.showDevelopers ?
							<List.Item hidden>
								<Statistic>
									<Statistic.Value>{this.state.developers}</Statistic.Value>
									<Statistic.Label>Developers</Statistic.Label>
								</Statistic>
								<br/>
								<Button id={"btn-dev"} onClick={this.ButtonClick}>Hire Developers</Button>
							</List.Item>
							:
							null
						}
					</List>
				</Container>
			</div>
		);
	}

}

export default YourThings;
