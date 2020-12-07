import React, { Component } from 'react';

class Tag extends Component {
  render () {
    return (
      <div className="tag">
        <div className="tag-top">
          <div className="tag-top-left">
            Tags
          </div>
          <div className="tag-top-right">
            <ul>
              <li>all</li>
              <li><i class="fa fa-tag"></i>Home</li>
              <li><i class="fa fa-tag"></i>Work</li>
              <li><i class="fa fa-tag"></i>School</li>
              <li>Reset</li>
            </ul>
          </div>
        </div>
        <div className="tag-bottom">
          <ul className="TodoList">
            {
              this.props.filt.map((element, index) => {
              return(
                <li key={index}>
                 {
                   element.active
                   ?  <input className='checkbox' type='checkbox' onChange={this.props.CheckedComplete} data-key={index}/>
                   :  <input className='checkbox' type='checkbox' onChange={this.props.CheckedComplete} data-key={index} checked/>
                 }
                  <span>{element.text}</span>
                  <i class="fa fa-times-circle" onClick={this.props.Delete} data-key={index}></i>
                </li>)
              })
            }
          </ul>
        </div>
      </div>
)
}
}
export default Tag;