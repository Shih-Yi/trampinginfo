import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../stylesheets/landing-page/layout.scss'

const LandingPage = (props) => {
  // useing react router to replace body component
  // but wanna change background for whole page(including navbar)
  $("body").removeClass("home-search-page");
  const [ searchInput, setSearchInput ] = useState('')
  const setInput = (e) => {
    setSearchInput(e.target.value)
  }

  return(
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
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
          <div class="input-group">
            <input type="text" name="search" id="autolocation" placeholder="What are you looking for?" className="form-control input-btn" value={searchInput} onChange={setInput} />
            <Link to={{ pathname: "/search", search: `searchInput=${searchInput}` }} className="text-link">
              <span class="input-group-append">
                <button class="bg-white search-input-btn" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
      <br/><br/>
      <div className="row">
      </div>
    </div>
  );
};

export default LandingPage;
