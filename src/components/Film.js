import React, {Component} from 'react';
import './Film.css';

class Film extends Component {
  render(){
    return (
      <div className="film">
      <ul>
        <a href={this.props.url}>
          <li>{this.props.name}</li>
        </a>
      </ul>
      </div>
    )
  }
}

export default Film;
