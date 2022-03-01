import React from 'react';
import Pic from '../../../image/track1.png';
import { Image } from 'semantic-ui-react'

const PopularTracks = (props) => {
  const { tracks } = props

  return(
    <section id="popular-tracks">
      <div className="container-new">
        <div className="row">
          <div className="my-2 py-4 title">
            <div className="popular-title">Popular Trails</div>
            <div className="popular-sub-title">What not join them now?</div>
          </div>
          <div className="bg-light box-shadow mx-auto"></div>
        </div>
        <div className="row">
          
            <div className="col-sm-4 card-box">
              <div className="card mb-4 shadow-sm">
                <div class="ui image image-box">
                  <img src="https://images.unsplash.com/photo-1535741656156-00f826d0d33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </div>
                <div className="card-body">
                  <h4>Roys Peak Track</h4>
                  <p className="card-text">Take in breathtaking views over Lake Wānaka, Mount Aspiring/Tititea and surrounding peaks</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">5-6 hr return</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 card-box">
            <div className="card mb-4 shadow-sm">
              <div class="ui image image-box">
                <img src="https://images.unsplash.com/photo-1591860123674-73af307b9336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              </div>
              <div className="card-body">
                <h4>Ben Lomond</h4>
                <p className="card-text">The Ben Lomond Track is a demanding climb and a full day's hike with an 1,438 m elevation gain.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">6-8 hr</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 card-box">
              <div className="card mb-4 shadow-sm">
                <div class="ui image image-box">
                  <img src="https://images.unsplash.com/photo-1533101062-8970cf1aabf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </div>
                <div className="card-body">
                  <h4>Hooker Valley Track</h4>
                  <p className="card-text">Enjoy the awe-inspiring landscapes of the Southern Alps/Kā Tiritiri o te Moana on one of our best day hikes</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">3 hr return</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTracks;
