import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LandingPage = (props) => {
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
            <Button variant="primary" bsPrefix="btn btn-normal btn-block">
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
