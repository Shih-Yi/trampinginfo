import React, { Component } from 'react';
import PaginationInternal from './PaginationInternal';
import PropTypes from 'prop-types';

export default class AppPagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const a = event.target;
    const pageNumber = a.dataset.value ? parseInt(a.dataset.value, 10) : parseInt(a.parentNode.dataset.value, 10);

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(pageNumber);
    }
  }

  render() {
    const {currentPage, totalPages} = this.props;

    return (
      <PaginationInternal
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={this.onClick}
        hidePreviousAndNextPageLinks
      />
    );
  }
}
