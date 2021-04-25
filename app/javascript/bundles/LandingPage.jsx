import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LandingPage = (props) => {
  const [ searchInput, setSearchInput ] = useState('')

  const setInput = (e) => {
    setSearchInput(e.target.value)
  }

  return(
    <div class="container">
      <div class="row">
        <div class="col-md-7 banner">
          <h1><span class="text-red">TracksInfo</span> </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <input type="text" name="search" id="autolocation" placeholder="What are you looking for?" class="form-control" value={searchInput} onChange={setInput} />
        </div>
      </div>
      <br/><br/>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <Link to={{ pathname: "/search", search: `searchInput=${searchInput}` }}>
            <Button variant="primary" bsPrefix="btn btn-normal btn-block">
              Search
            </Button>
          </Link>
        </div>
      </div>
      <br /><hr /><br />
      <div><h3>Tracks</h3></div>
      <br />
      <div class="row">
      </div>
    </div>
  );
};

export default LandingPage;
