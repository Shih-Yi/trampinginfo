import React from 'react';
import Pic from '../../../image/track1.png';
import { Image } from 'semantic-ui-react'

const PopularTracks = (props) => {
  const { tracks } = props

  return(
    <section id="popular-tracks">
      <div className="container">
        <div className="row">
          <div className="my-4 py-4 title">
            <h1 className="">Hear form what others say</h1>
            <h4 className="">What you have shared might help somebody else toda!</h4>
          </div>
          <div className="bg-light box-shadow mx-auto"></div>
        </div>
        <div className="row">
          {tracks.map(track => (
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <Image src={Pic} wrapped />
                <div class="card-body">
                  <h4>{track.name}</h4>
                  <p class="card-text">{track.introduction}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTracks;
