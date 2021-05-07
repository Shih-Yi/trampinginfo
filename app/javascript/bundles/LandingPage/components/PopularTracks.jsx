import React from 'react';
// import '../stylesheets/landing-page/layout.scss'

const PopularTracks = () => {

  return(
    <section id="popular-tracks">
      <div className="container">
        <div className="row">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light box-shadow mx-auto"></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark box-shadow mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularTracks;
