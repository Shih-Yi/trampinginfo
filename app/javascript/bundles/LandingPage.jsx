import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../stylesheets/landing-page-layout.scss'

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
        <div className="col-md-7 banner">
          <h1><span className="text-red">TracksInfo</span> </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input type="text" name="search" id="autolocation" placeholder="What are you looking for?" className="form-control" value={searchInput} onChange={setInput} />
        </div>
      </div>
      <br/><br/>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Link to={{ pathname: "/search", search: `searchInput=${searchInput}` }} className="text-link">
            <Button className='btn btn-normal btn-block'>
              Search
            </Button>
          </Link>
        </div>
      </div>
      <br /><hr /><br />
      <div><h3>Tracks</h3></div>
      <br />
      <div className="row">
      </div>
    </div>
  );
};

export default LandingPage;
