import React, { useState } from 'react';
import PopularTracks from './PopularTracks'
import HearFrom from './HearFrom'
import ExploreWith from './ExploreWith'
import { Link, useHistory } from 'react-router-dom';

const LandingPage = (props) => {
  // useing react router to replace body component
  // but wanna change background for whole page(including navbar)
  const { tracks } = props
  const [ searchInput, setSearchInput ] = useState('')
  const setInput = (e) => {
    setSearchInput(e.target.value)
  }
  let history = useHistory();
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search?searchInput=${searchInput}`);
    }
  }

  return(
    <div className="landing-page">
      <section id="cover">
        <div className="container">
          <div className="row">
            <div className="col-md-12 landing-title">
              <div className="title-text">Latest updates of all tracks in New Zealand</div>
              <div className="content-text">
                Heading for a hike and afraid it might rain? Read form those have just been there
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-3">
            </div>
            <div className="col-8 col-sm-6">
              <div className="input-group">
                <input type="text" name="search" id="autolocation" placeholder="What are you looking for?" className="form-control input-btn" value={searchInput} onChange={setInput} onKeyPress={onKeyPress}/>
                <Link to={{ pathname: "/search", search: `searchInput=${searchInput}` }} className="text-link" >
                  <span className="input-group-append">
                    <button className="bg-white search-input-btn" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-2 col-sm-3">
            </div>
          </div>
          <br/><br/>
          <div className="row">
          </div>
        </div>
      </section>
      <PopularTracks tracks={tracks} />
      <ExploreWith />
      <HearFrom />
    </div>
  );
};

export default LandingPage;
