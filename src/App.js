import React, {Component} from 'react';
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
      .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">

        {this.state.monsters.map(monster => ( // map over the monsters array 
            <h1 key={monster.id}>
              {monster.name}
            </h1>
          ))}

    </div>
    )
  }
}

export default App;
