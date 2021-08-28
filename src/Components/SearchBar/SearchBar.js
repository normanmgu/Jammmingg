import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event) {
    this.setState(
      {term: event.target.value}
    )
  }
  render() {
    return (
    <div className="SearchBar">
      <input 
        className="Bar" 
        placeholder="Enter a Song, Album, or Artist" 
        onChange={this.handleTermChange} />
      <button className="SearchButton">SEARCH</button>
    </div>
    )
  }
}
export default SearchBar;