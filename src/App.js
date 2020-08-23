import React, {Component} from 'react';
import CardList from './components/cardList/cardList';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // state only lives in 1 location and is passed down
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
        <SearchBar monsters={this.state.monster}/> {/** passing state down as a attribute */} 
        <CardList monsters={this.state.monsters} /> {/** passing state down as a attribute */} 
        
    </div>
    )
  }
}

export default App;
