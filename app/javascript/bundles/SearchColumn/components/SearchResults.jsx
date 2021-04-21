import React, { Component } from 'react';
import Pagination from '../../AppPagination'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state={
      isLoading: false,
      items: [],
      tracks: new Object(),
      map: null,
      activePage: 1,
      perPage: 10,
      totalPages: 0,
      pageItems: [],
    }
    this.initMap = this.initMap.bind(this)
    this.addDataToMap = this.addDataToMap.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
    this.boundsChangedResult = this.boundsChangedResult.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
  }

  initMap = () => {
    let map;

    map = new google.maps.Map(document.getElementById("info-map"), {
      zoom: 5.5,
      center: { lat: -40.9006, lng: 174.8860 },
    });
    this.setState({ map: map })
  }

  addDataToMap = (responseJson) => {
    let datas;
    let markers = [];

    datas = this.state.map.data.addGeoJson(responseJson);
    this.state.map.data.setStyle({
      strokeColor: 'green',
      strokeOpacity: '1.0'
    });

    for (var i = 0; i < Object.keys(this.state.tracks).length; i++) {
      const data = datas[i];
      const lat = data.getGeometry().getAt(0).g[0].lat();
      const lng = data.getGeometry().getAt(0).g[0].lng();
      const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng }, label: ""+data.getProperty('OBJECTID')+""
      });
        const infowindow = new google.maps.InfoWindow({
            content: data.getProperty('OBJECTID') + ": "+ "<p>Marker Location: " + marker.getPosition() + "</p>",
        });
        google.maps.event.addListener(marker, "click", () => {
            console.log(marker)
            infowindow.open(this.state.map, marker);
        });
      markers.push(marker);
    }

    this.boundsChangedResult(this.state.map, this.state.tracks);

    new MarkerClusterer(this.state.map, markers, {
      imagePath:
      "https://raw.githubusercontent.com/googlemaps/js-markerclustererplus/main/images/m",
    });
  }

  boundsChangedResult = (map, tracks) => {
    let { perPage } = this.state;
    let self = this

    google.maps.event.addListener(map, 'bounds_changed', function() {
      let bounds = map.getBounds();
      let maxLat = bounds.getNorthEast().lat();
      let minLat = bounds.getSouthWest().lat();
      let maxLng = bounds.getNorthEast().lng();
      let minLng = bounds.getSouthWest().lng();

      if (maxLng < 0) {
        maxLng += 360
      }
      console.log(maxLat, maxLng, minLat, minLng)
      let filteredObject = Object.keys(tracks).reduce(function(r, ele) {
        if (tracks[ele].geometry.coordinates[0][0][1] >= Number(minLat) &&
            tracks[ele].geometry.coordinates[0][0][1] <= Number(maxLat) &&
            tracks[ele].geometry.coordinates[0][0][0] >= Number(minLng) &&
            tracks[ele].geometry.coordinates[0][0][0] <= Number(maxLng)) {

          r[ele] = tracks[ele]
        }
          return r;
      }, {})
      self.setState({ items: Object.values(filteredObject),
                      isLoading: true,
                      activePage: 1,
                      totalPages: Math.ceil(Object.keys(filteredObject).length/perPage)
                    })
      self.props.updateResultsNumber(Object.keys(filteredObject).length)
      self.handleNextPage(1);
    })
  }

  getSearchResults = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function(response){
        return response.json();
      })
      .then(result => {
        let { perPage } = this.state;
        let setTracks = new Object();

        for (let element of result.features) {
          setTracks[element.properties.OBJECTID] = element
        }

        this.setState({ tracks: setTracks,
                        items: result.features,
                        isLoading: true,
                        totalPages: Math.ceil(result.features.length/perPage)
                      })
        this.addDataToMap(result);
        this.props.updateResultsNumber(Object.keys(setTracks).length)
        this.handleNextPage(1);
      })
  }

  componentDidMount(){
    this.initMap();
    this.getSearchResults();
  }

  handleNextPage(activePage) {
    let { perPage } = this.state;
    let { items, tracks } = this.state;
    let firstItem = activePage == 1 ? 0 : (activePage - 1) * perPage
    let lastItem = activePage * perPage
    let slicedItems = Object.keys(items).slice(firstItem, lastItem).reduce((result, key) => {
      result[key] = items[key];
      return result;
    }, {});

    let sets = new Object();
    for (const [key, value] of Object.entries(slicedItems)) {
      sets[value.properties.OBJECTID] = value
    }

    let filtered = Object.keys(tracks)
                     .filter(key => Object.keys(sets).includes(key))
                    .reduce((obj, key) => {
                      obj[key] = tracks[key];
                      return obj;
                    }, {});
    this.setState({ pageItems: Object.values(filtered), isLoading: true, activePage:  activePage })
  }

  render() {
    let { isLoading, pageItems, totalPages } = this.state;

    if (isLoading)
      return(
        <div>
          {pageItems.map(item => (
            <div key={item.properties.OBJECTID} className="card mb-4 shadow-sm rounded-box">
              <img className="card-img card-img-rounded" data-src="" src={item.properties.introductionThumbnail} data-holder-rendered="true"></img>
              <div className="card-body">
                  <p className="card-text">{item.properties.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
              </div>
            </div>
          ))}

          {totalPages > 1 &&
            <div className="pagination-wrap">
              <Pagination
                totalPages={totalPages}
                currentPage={this.state.activePage}
                onChange={this.handleNextPage}
              />
            </div>
          }
        </div>
      );
    else
      return(
        <div id="">讀取中</div>
      );
  }
}

export default SearchResults;
