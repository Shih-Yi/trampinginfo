import React, { Component } from 'react';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="card mb-4 shadow-sm search-header rounded-box">
        <div className="card-body">
          <p className="card-text">Found Tracks ({this.props.searchResultsNumber})</p>
        </div>
      </div>
    )
  }
}

export default SearchHeader;
