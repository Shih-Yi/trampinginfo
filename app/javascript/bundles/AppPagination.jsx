import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class AppPagination extends Component {
  static propTypes = {
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const a = event.target;
    const pageNumber = a.getAttribute("value") ? parseInt(a.getAttribute("value"), 10) : false

    if (!pageNumber) { return false }
    if (typeof this.props.handleNextPage === 'function') {
      this.props.handleNextPage(pageNumber);
    }
  }

  render() {
    const {activePage, totalPages} = this.props;

    return (
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onClick={this.onClick}
      />
    );
  }
}
