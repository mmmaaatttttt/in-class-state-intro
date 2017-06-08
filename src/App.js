import React, { Component } from 'react';
import './App.css';
import Person from './Person';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to the People who own dogs shop!</h2>
    </div>
    <Person />
  </div>
)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to the People who own dogs shop!</h2>
//         </div>
//         <Person />
//       </div>
//     );
//   }
// }

export default App;
