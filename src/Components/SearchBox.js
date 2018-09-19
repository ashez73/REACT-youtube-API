import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
render() {
  return(
    <div className = 'SearchContainer'>
    <input className ='shadow' type = 'search' placeholder ='Search for YouTube video' onChange = {this.props.searchInp}></input>
    </div>
  )
};
}
export default SearchBox;