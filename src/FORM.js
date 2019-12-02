import React from 'react';
import './App.css';


class FORM extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			firstname: "ANSHUL",
			lASTname: "SHARMA",
			Mobile: "9992181918"
		}

	}

	componentDidMount() {
		fetch("http://localhost:8090/api/items")
			.then(res => res.json())
			.then(
				(result) => {
					console.log("in result");
					this.setState({
						isLoaded: true,
						items: result.data
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		const {
			error, isLoaded, items
		} = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
				<ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
        </div>
			);
		}
	}
}

/* render() {
	return (
		<div>
	       <h1>welcome to my Home</h1>
	        First name:<br></br>
	         <input type="text" name="firstname" value={this.state.firstname}></input>
	         <br></br>
	          LAST name:<br></br>
	          <input type="text" name="lASTname" value={this.state.lASTname}></input>
	          <br></br>
	           MOBILE:<br></br>
	           <input type="text" name="Mobile" value={this.state.Mobile}></input>
	           <br></br>
	         

        </div>
	);
}  
}  */

export default FORM;