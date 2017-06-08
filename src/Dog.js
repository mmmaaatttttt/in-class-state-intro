import React, { Component } from 'react';

const Dog = ({name, image}) => (
  <div>
    <h1>{name}</h1>
    <img src={image} alt={name + " the dog"}/>
  </div>
)

// class Dog extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <img src={this.props.image} alt={this.props.name + " the dog"}/>
//       </div>
//     )
//   }
// }

export default Dog;
