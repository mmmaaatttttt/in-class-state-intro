import React, { Component } from 'react';
import Dog from './Dog';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dogs: []
    }
    
    setTimeout(() => {
      this.setState({
        name: "Matt",
        dogs: [{
          name: "Whiskey",
          image: "https://avatars0.githubusercontent.com/u/21209733?v=3&s=460"
        }, {
          name: "Brutus",
          image: "http://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
        }]
      })
    }, 3000);
  } 

  render() {
    const dogs = this.state.dogs.map((dog, i) => (
      <Dog name={dog.name} key={i} image={dog.image}/>
    ))

    return (
      <div>
        <h1>{this.state.name}</h1>
        Here are {this.state.name}'s dogs:
        {dogs}
      </div>
    )
  }
}

export default Person;

