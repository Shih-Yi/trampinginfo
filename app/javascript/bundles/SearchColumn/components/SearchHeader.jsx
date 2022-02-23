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
      <div className="search-header-box">
        <div className="card search-header rounded-box mb-4 mt-4">
          <div className="card-body">
            <p className="card-text">Found Tracks {isLoading && '(' + searchResultsNumber + ')'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchHeader;
