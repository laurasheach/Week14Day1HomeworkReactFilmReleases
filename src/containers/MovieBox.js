import React, {Component} from 'react';
import Header from '../components/Header'
import UpComingLink from '../components/UpComingLink';

class MovieBox extends Component {

  render(){
    return(
      <div className="movie-box">
        <Header />

        <UpComingLink />
      </div>
    )
  }

}

export default MovieBox;
