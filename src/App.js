import React, {Component} from 'react';
import CardList from './components/cardList/cardList';
import SearchBar from './components/searchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();

    // state only lives in 1 location and is passed down as props
    this.state = { // this is a object
      monsters: [], // save the api data here
      searchField: '' // save the searchfield text here
    };
  }
  // lifecycle method... connect to api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // receive a promise & change data to json
      .then(data => this.setState({monsters: data}))
  }

  render() {
    // destructuring
    // const monsters = this.state
    // const searchField = this.state
    const {monsters, searchField } = this.state;
    // filter function 
    const filterMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBar 
          placeholder = "search..."
          handleChange = {e => this.setState({searchField : e.target.value})}
        />
        <CardList monsters={filterMonsters} /> {/** passing state down as a attribute and turned into props */} 
      </div>
    )
  }
}

export default App;
