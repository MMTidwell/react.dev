// Componates in REACT sould start with a Cap letter
function Application () {
	return (
		<div>
			<h1>Hello from REACT!</h1>
			<p>I was rendered fromthe Application component!</p>
		</div>
	);
}


// This should place "Hello" where "Loading..." is in the HTML file
// ---------
// ReactDOM.render - renders code to page
	// takes 2 arguments - (virtual DOM element, real DOM element where we would like to place the virtual DOM element)
// ReactDOM.render(<h1>Hello</h1>, document.getElementById("container"));

// In order to call the Application Component function, call that in place of the first argument. Note that since it does not have any child elements it does not need to have a closing tag and we will simply put "/>" at the end of the call
ReactDOM.render(<Application />, document.getElementById('container'));