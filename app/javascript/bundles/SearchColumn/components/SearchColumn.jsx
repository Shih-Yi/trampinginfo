import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

class SearchColumn extends Component {
  render () {
    return (
      <div>
        <SearchHeader />
        <SearchResults />
      </div>
    )
  }
}

export default SearchColumn;
