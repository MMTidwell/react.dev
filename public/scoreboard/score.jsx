var PLAYERS = [
	{
		name: "Mitt Tidwell",
		score: 32,
		id: 1	
	},
	{
		name: "Tim Kessler",
		score: 29,
		id: 2
	},
	{
		name: "Marley Dozer",
		score: 8,
		id: 3
	}
]

function Header(props) {
	return (
		<div className="header">
			<h1> {props.title} </h1>
		</div>
	); 
};

Header.propType = {
	title: React.PropTypes.string.isRequired,
};

// Component Class - A component definition that can include things like state, helper methods and other advanced hooks into the page’s DOM
var Counter = React.createClass({
	propTypes: {
		initialScore: React.PropTypes.number.isRequired,
	},

	getInitialState: function() {
		return {
			score: this.props.initialScore,
		}
	},

	incrementScore: function(e) {
		this.setState ({
			score: (this.state.score + 1),
		});
		// console.log("incrementScore", e);
	},

	decrementSocre: function(e) {
		this.setState ({
			score: (this.state.score - 1),
		});
		// console.log("decrementScore", e);
	},

	render: function() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementSocre}> 
					- 
				</button>
				<div className="counter-score">
					{this.state.score}
				</div>
				<button className="counter-action increment" onClick={this.incrementScore}>
					+
				</button>
			</div>
		);
	}
});

function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter initialScore={props.score} />
			</div>
		</div>
	);
};

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
};


// {props.title} - will call what is in the Application arg. Then the arg is pulled from the called section in the REACT line bellow. {} must be used since plan JS is being used here
// <Header title = {props.title} /> - This calls the Header function and passes the props.title
function Application (props) {
	return (
		<div className="scoreboard">
			<Header title = {props.title} />

			<div className="players">
				{props.players.map(function (player) {
					return <Player name={player.name} score={player.score} key={player.id} />
				})}
			</div>
		</div>
	);
}

// This is used to make the title be a string and not another data type. Note that another data type will still show on the web page but you will see a error in the console
// .isRequired is added at the end to ensure that something is passed in. If nothing is passed in then it will show nothing on the page, but when you check the console you will see a error there
Application.propTypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired,
	})).isRequired,
};

// This is used as a default in case a prop is not passed in
Application.defaultProps = {
	title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));




