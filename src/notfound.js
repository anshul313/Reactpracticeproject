import React from "react";
import {
	Bar
}
from "react-chartjs-2";
class notfound extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				labels: ["1", "2", "3", "4", "5"],
				datasets: [{
					label: "china",
					backgroundColor: "rgba(255,0,0,0.75)",
					data: [1420062022]
				}, {
					label: "india",
					backgroundColor: "rgba(0,255,0,0.75)",
					data: [1368737513]
				}, {
					label: "US",
					backgroundColor: "rgba(0,0,225,0.75)",
					data: [329093110]
				}]
			}
		}
	}
	render() {
		return (
			<div style={{ position: "relative", width: 600, height: 550}}>
       <h3>chart samples</h3>
       <Bar
       options={{
       	respnsive:true
       }}
       data= {this.state.data}
       />
      </div>
		);
	}
}

export default notfound