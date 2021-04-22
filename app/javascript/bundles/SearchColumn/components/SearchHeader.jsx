import React, { Component } from 'react';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    let { isLoading, searchResultsNumber } = this.props
    return (
      <div className="card mb-4 shadow-sm search-header rounded-box">
        <div className="card-body">
          <p className="card-text">Found Tracks {isLoading && '(' + searchResultsNumber + ')'}</p>
        </div>
      </div>
    )
  }
}

export default SearchHeader;
