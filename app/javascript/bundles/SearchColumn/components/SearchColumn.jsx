import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

const mapStyle = {
  width: '100%',
  height: '100%',
}

const rowStyle = {
  position: 'absolute',
}

class SearchColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
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

  initMap = () => {
    let { map } = this.state
    map = new google.maps.Map(document.getElementById("info-map"), {
      zoom: 5.5,
      center: { lat: -40.9006, lng: 174.8860 },
    });
    this.setState({ map: map });
  }

  componentDidMount() {
    this.initMap();
  }

  render () {
    let { map, isLoading, searchResultsNumber } = this.state
    return (
      <div className="container-fluid content-float" style={rowStyle}>
        <div className="row content-float" >
          <div className="col-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4 mb-4" id="left">
            <div className="search-column">
              <SearchHeader isLoading={isLoading} searchResultsNumber={searchResultsNumber} />
              <SearchResults map={map} setIsLoading={this.setIsLoading} updatSearchResultsNumber={this.updatSearchResultsNumber} />
            </div>
          </div>
          <div className="col-6 col-lg-6 col-md-6 hidden-xs pr-0 px-0">
            <div id="info-map" style={mapStyle}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchColumn;
