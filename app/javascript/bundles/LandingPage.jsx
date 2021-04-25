import React from 'react'

const LandingPage = (props) => {

  return(
    <div class="container">
      <div class="row">
        <div class="col-md-7 banner">
          <h1><span class="text-red">TracksInfo</span> </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <input type="text" name="search" id="autolocation" placeholder="What are you looking for?" class="form-control" />
        </div>
      </div>
      <br/><br/>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <input type="submit" name="commit" value="Search" class="btn btn-normal btn-block" data-disable-with="Search" />
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
