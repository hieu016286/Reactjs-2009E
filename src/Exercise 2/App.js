import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
     <div id="container">
       <ul>
         <li>
            <h2>Reactjs Quiz</h2>
            <p className="line"></p>
            <p >0% complete</p>
         </li>
         <li>
            <p className="title">What is the full form of HTTP</p>
            <p class="select">a. Hyper text transfer package</p>
            <p class="select">b. Hyper text transfer protocol</p>
            <p class="select">c. Hyphenation text test program</p>
            <p class="select">d. None of the above</p>
         </li>
         <li>
            <input type='submit' value='Back'></input>
            <input type='submit' value='Skip'></input>
         </li>
       </ul>
     </div>
    )
  }
}
export default App;