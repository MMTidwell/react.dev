// {props.title} - will call what is in the Application arg. Then the arg is pulled from the called section in the REACT line bellow. {} must be used since plan JS is being used here
function Application (props) {
	return (
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>

			<div className="players">
				<div className="player">
					<div className="player-name">
						Mitt Tidwell
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> 
								- 
							</button>
							<div className="counter-score">
								32
							</div>
							<button className="counter-action increment">
								+
							</button>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						Tim Kessler
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement">
								-
							</button>
							<div className="counter-score">
								29
							</div>
							<button className="counter-action increment">
								+
							</button>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						Marley Dozer
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement">
								-
							</button>
							<div className="counter-score">
								8
							</div>
							<button className="counter-action increment">
							 	+
							 </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// This is used to make the title be a string and not another data type. Note that another data type will still show on the web page but you will see a error in the console
// .isRequired is added at the end to ensure that something is passed in. If nothing is passed in then it will show nothing on the page, but when you check the console you will see a error there
Application.propTypes = {
	title: React.PropTypes.string.isRequired,
};

// This is used as a default in case a prop is not passed in
Application.defaultProps = {
	title: "Scoreboard",
}

ReactDOM.render(<Application title="My Scoreboard"/>, document.getElementById('container'));




