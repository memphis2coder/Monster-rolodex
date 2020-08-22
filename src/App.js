import React, {Component} from 'react';
import CardList from './components/cardList/cardList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }
  // lifecycle method... connect to api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // receive a promise & change data to json
      .then(data => this.setState({monsters: data}))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
        
    </div>
    )
  }
}

export default App;
