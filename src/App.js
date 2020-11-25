import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
     <div class="container">
       <ul>
          <li className="flag">
            <i class="fa fa-home"></i>
          </li>
          <li className="flag">
            <i class="fa fa-trophy"> Projects</i>
          </li >
          <li className="flag">
            <i class="fa fa-angle-double-right"> Breadcrum</i>
          </li>
          <li className="flag">
            <i class="fa fa-plane"> Getting started</i>
          </li>
          <li className="flag">
            <i class="fa fa-download"> Download</i>
          </li>
       </ul>
     </div>
    )
  }
}
export default App;