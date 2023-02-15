import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => {
    //             this.setState({ apiResponse: res })
    //             console.log('res', res);
    //         })
    //         .catch(err => err);
    // }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App11">
                123
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
