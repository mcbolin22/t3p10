import logo from './logo.svg';
import './App.css';
import React from 'react';

// number of cards to render = 6
// use state to store data with classes
// do not use "let numberOfCardsToRender = 6;"
// use the following to store data:

class App extends React.Component {
  constructor(){
    super();

    this.state = 
    {
      numberOfPokemonToShow: 6
    }

    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }

  exampleFunction(){
    console.log("Example function was run!")
  }

  increaseNumber(){
    this.setState({numberOfPokemonToShow: this.state.numberOfPokemonToShow + 1});
     
  }

  decreaseNumber(){
    this.setState({numberOfPokemonToShow: this.state.numberOfPokemonToShow - 1});
  }

  render(){
    return (
      <div className="App">
        <h1>Number of Pokemon to show: {this.state.numberOfPokemonToShow}</h1>
        <button onClick={this.increaseNumber}>
          Increase number
        </button>
        <button onClick={this.decreaseNumber}>
          Decrease number
        </button>

        {/* This is a dodgey way of making the range feature work. Create an array of size {numberOfPokemonToShow}, give each element in the array a value of null */}
        {/* For each item in the array, render a HTML element (eg. a <h1>) */}
        {
        Array(this.state.numberOfPokemonToShow)
        .fill(null)
        .map((element, index) => { 
          return <h1>{index}</h1>
          })
        }
      </div>
    );

  }
  
}

export default App;
