import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

class SearchColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      searchResultsNumber: null,
    }
    this.setIsLoading = this.setIsLoading.bind(this);
    this.updatSearchResultsNumber = this.updatSearchResultsNumber.bind(this);
  }

  setIsLoading(isLoading) {
    this.setState({ isLoading: isLoading });
  }

  updatSearchResultsNumber(number) {
    this.setState({ searchResultsNumber: number });
  }

  render () {
    let { isLoading, searchResultsNumber } = this.state
    return (
      <div className="search-column">
        <SearchHeader isLoading={isLoading} searchResultsNumber={searchResultsNumber} />
        <SearchResults setIsLoading={this.setIsLoading} updatSearchResultsNumber={this.updatSearchResultsNumber} />
      </div>
    )
  }
}

export default SearchColumn;
