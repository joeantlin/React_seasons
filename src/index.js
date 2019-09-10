import React from 'react';
import ReactDom from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            }, 
            error => {
                this.setState({ errorMessage: error.message });
                console.log(error.message);
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
};

ReactDom.render(<App />, document.querySelector('#root'))