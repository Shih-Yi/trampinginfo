import React, { Component } from 'react';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    )
  }
}

export default SearchHeader;
