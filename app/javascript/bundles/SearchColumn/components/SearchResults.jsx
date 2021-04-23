import React, { Component } from 'react';
import Pagination from '../../AppPagination'
import gsap from "gsap";

let perPage = 10;
let map, mapFeatures, mapFeaturesWithId, markersObjWithId;
let infowindow, markerClusterer;
let allTracks = [];
class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      totalPages: 0,
      isLoading: false,
      responseTracks: [],
      tracksObjWithId: new Object(),
      pageItems: [],
      markers: [],
    }
    this.initMap = this.initMap.bind(this)
    this.addDataToMap = this.addDataToMap.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
    this.boundsChangedResult = this.boundsChangedResult.bind(this)
    this.mouseoverTrackStyle = this.mouseoverTrackStyle.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
  }

  initMap = () => {
    map = new google.maps.Map(document.getElementById("info-map"), {
      zoom: 5.5,
      center: { lat: -40.9006, lng: 174.8860 },
    });
  }

  addDataToMap = (responseJson) => {
    let { markers, tracksObjWithId } = this.state;

    mapFeatures = map.data.addGeoJson(responseJson);
    map.data.setStyle({
      strokeColor: 'green',
      strokeOpacity: '0'
    });

    infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < Object.keys(tracksObjWithId).length; i++) {
      this.setMarkers(mapFeatures, markers, i)
    }

    let setFeatures = new Object();
    for (let element of mapFeatures) {
      setFeatures[element.getProperty("OBJECTID")] = element
    }
    mapFeaturesWithId = setFeatures

    let objMarkers = new Object();
    for (let element of markers) {
      objMarkers[parseInt(element.labelClass)] = element
    }
    markersObjWithId = objMarkers

    this.boundsChangedResult(map, tracksObjWithId);
    this.mouseoverTrackStyle(map);

    markerClusterer = new MarkerClusterer(map, markers, {
      imagePath:
      "/m",
    });
  }

  setMarkers = (mapFeatures, markers, i) => {
    let marker = null
    let data = mapFeatures[i];
    let lat = data.getGeometry().getAt(0).g[0].lat();
    let lng = data.getGeometry().getAt(0).g[0].lng();
    marker = new google.maps.Marker({
      position: { lat: lat, lng: lng }, labelClass: "" + data.getProperty('OBJECTID') + "",
    });

    google.maps.event.addListener(marker, 'mouseover', () => {
      if (infowindow) {
        infowindow.close();
      }
      infowindow.setContent("<div style='float:left'>" +
                            "<img src='" + data.getProperty('introductionThumbnail') + "'>" +
                            "</div>" +
                            "<div style='float:right; padding:10px; font-weight:bold;'>" +
                              "<div style='font-size:large;'>"+ data.getProperty('name') +"</div><br/>" +
                              "<div style='font-size:medium;'>" + data.getProperty('difficulty') + "</div><br/>" +
                              "<div style='font-size:medium;'>" + data.getProperty('completionTime') + "</div>" +
                            "</div>")

    infowindow.setPosition({ lat: lat, lng: lng });
      infowindow.open(map, marker);
    });
    markers.push(marker);
  }

  boundsChangedResult = (map, tracksObjWithId) => {
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
      let filteredObject = Object.keys(tracksObjWithId).reduce(function(r, ele) {
        if (tracksObjWithId[ele].geometry.coordinates[0][0][1] >= Number(minLat) &&
            tracksObjWithId[ele].geometry.coordinates[0][0][1] <= Number(maxLat) &&
            tracksObjWithId[ele].geometry.coordinates[0][0][0] >= Number(minLng) &&
            tracksObjWithId[ele].geometry.coordinates[0][0][0] <= Number(maxLng)) {

          r[ele] = tracksObjWithId[ele]
        }
        return r;
      }, {})
      self.setState({ responseTracks: Object.values(filteredObject),
                      isLoading: true,
                      activePage: 1,
                      totalPages: Math.ceil(Object.keys(filteredObject).length/perPage)
                    })
      self.props.updatSearchResultsNumber(Object.keys(filteredObject).length)
      self.props.setIsLoading(self.state.isLoading)
      self.handleNextPage(1);
    })
  }

  mouseoverTrackStyle = (map) => {
    map.data.addListener('mousemove', function(event) {
      map.data.overrideStyle(event.feature, {strokeColor: 'red', strokeOpacity: '1'});
    });
    map.data.addListener('mouseout', function(event) {
      map.data.overrideStyle(event.feature, {strokeOpacity: '0' });
    });
  }

  cardShowTrackEvent = (event) => {
    let target = event.target.closest(".result-item")
    let objId = target.dataset.key
    let feature = mapFeaturesWithId[objId]
    let marker = markersObjWithId[objId]

    map.data.overrideStyle(feature, {strokeColor: 'red', strokeOpacity: '1'});
    google.maps.event.trigger(marker, 'mouseover');
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 1400);
  }

  cardDisableTrackEvent = (event) => {
    let target = event.target.closest(".result-item")
    let objId = target.dataset.key
    map.data.overrideStyle(mapFeaturesWithId[objId], {strokeColor: 'green', strokeOpacity: '0'});
  }

  inputOnChange = e => {
    let { markers } = this.state;
    this.setMapOnAll(null);
    markers = []
    markerClusterer.clearMarkers();

    let filteredTracks = allTracks.filter(track => {
      return track.properties.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    let page = filteredTracks.length == 0 ?  0 : Math.ceil(filteredTracks.length/perPage)

    let setTracks = new Object();
    for (let element of filteredTracks) {
      setTracks[element.properties.OBJECTID] = element
    }

    let filtered = Object.keys(mapFeaturesWithId)
                         .filter(key => Object.keys(setTracks).includes(key))
                         .reduce((obj, key) => {
                           obj[key] = mapFeaturesWithId[key];
                           return obj;
                         }, {});
    for (var i = 0; i < Object.keys(setTracks).length; i++) {
      this.setMarkers(Object.values(filtered), markers, i)
    }

    this.setState({ responseTracks: filteredTracks,
      isLoading: true,
      activePage: 1,
      totalPages: page,
      markers: markers,
    }, () => this.handleNextPage(1));

    this.boundsChangedResult(map, setTracks);
    this.props.updatSearchResultsNumber(filteredTracks.length)
    this.props.setIsLoading(this.state.isLoading)

    markerClusterer = new MarkerClusterer(map, markers, {
      imagePath:
      "/m",
    });
  }

  setMapOnAll = (map) => {
    let { markers } = this.state;
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
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
      .then(responseJson => {
        let setTracks = new Object();
        allTracks = responseJson.features

        for (let element of responseJson.features) {
          setTracks[element.properties.OBJECTID] = element
        }

        this.setState({ tracksObjWithId: setTracks,
                        responseTracks: responseJson.features,
                        isLoading: true,
                        totalPages: Math.ceil(responseJson.features.length/perPage)
                      })
        this.addDataToMap(responseJson);
        this.props.updatSearchResultsNumber(Object.keys(setTracks).length)
        this.props.setIsLoading(this.state.isLoading)
        this.handleNextPage(1);
      })
  }

  componentDidMount(){
    this.initMap();
    this.getSearchResults();
    gsap.to("circle", {
      duration: 0.6,
      opacity: 0.2,
      scale: 1.4,
      ease: "sine.inOut",
      stagger: { yoyo: true, repeat: -1, each: 0.4 }
    });
  }

  handleNextPage(activePage) {
    let { responseTracks, tracksObjWithId, isLoading } = this.state;
    let firstItem = activePage == 1 ? 0 : (activePage - 1) * perPage
    let lastItem = activePage * perPage
    let slicedItems = Object.keys(responseTracks).slice(firstItem, lastItem).reduce((result, key) => {
      result[key] = responseTracks[key];
      return result;
    }, {});

    let sets = new Object();
    for (const [key, value] of Object.entries(slicedItems)) {
      sets[value.properties.OBJECTID] = value
    }

    let filtered = Object.keys(tracksObjWithId)
                     .filter(key => Object.keys(sets).includes(key))
                    .reduce((obj, key) => {
                      obj[key] = tracksObjWithId[key];
                      return obj;
                    }, {});
    this.setState({ pageItems: Object.values(filtered), isLoading: true, activePage:  activePage })
    this.props.setIsLoading(isLoading)
  }

  render() {
    let { isLoading, pageItems, totalPages } = this.state;
    if (isLoading)
      return(
        <div>
          <div className="form-group">
            <label>Search:</label>
            <input type="text" className="form-control" id="usr" onChange={this.inputOnChange} />
          </div>
          {pageItems.map(item => (
            <div key={item.properties.OBJECTID} className="card mb-4 shadow-sm rounded-box result-item" data-key={item.properties.OBJECTID} onMouseOver={this.cardShowTrackEvent} onMouseOut={this.cardDisableTrackEvent}>
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
            <div className="pagination-wrap d-flex justify-content-center">
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
        <div id="searchLoading">
          <svg viewBox="0 0 500 200">
            <circle cx="200" cy="50" r="50" />
            <circle cx="50" cy="50" r="50" />
            <circle cx="350" cy="50" r="50" />
          </svg>
        </div>
      );
  }
}

export default SearchResults;
