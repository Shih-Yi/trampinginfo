import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

class SearchColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsNumber: null,
    }
    this.updatSearchResultsNumber = this.updatSearchResultsNumber.bind(this);
  }

  updatSearchResultsNumber(number) {
    this.setState({ searchResultsNumber: number });
  }

  render () {
    return (
      <div className="search-column">
        <SearchHeader searchResultsNumber={this.state.searchResultsNumber} />
        <SearchResults updateResultsNumber={this.updatSearchResultsNumber} />
      </div>
    )
  }
}

export default SearchColumn;
