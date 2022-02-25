import React from 'react';
import { Image } from 'semantic-ui-react'
// import '../stylesheets/landing-page/layout.scss'

const HearFrom = () => {

  return(
    <section id="hear-from" class="pb-4">
      <div className="container">
        <div className="row">
          <div className="my-4 py-4 title">
            <h1 className="">Hear form what others say</h1>
            <h4 className="">What you have shared might help somebody else toda!</h4>
          </div>
          <div className="bg-light box-shadow mx-auto"></div>
        </div>
        <div class="row">
          <div class="col-md-4">
          <div class="row">
            <div class="col-md-3">
              <Image src='https://fakeimg.pl/66x66/' wrapped circular />
            </div>
            <div class="col-md-9">
              <div class='img-name'>Melinda C</div>
              <div class='img-city'>Christchurch</div>
            </div>
          </div>
          <div class='img-text'>
            "Thanks for the posts on TrackInfo, I was able to avoid heavy rain, muddy ground and accidents which wasn’t mentioned in forecast!"
          </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-3">
                <Image src='https://fakeimg.pl/66x66/' wrapped circular />
              </div>
              <div class="col-md-9">
                <div class='img-name'>Melinda C</div>
                <div class='img-city'>Christchurch</div>
              </div>
            </div>
            <div class='img-text'>
              "It’s easy for me to use!  I usually don't like posting but it's so fast and easy!"
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-3">
                <Image src='https://fakeimg.pl/66x66/' wrapped circular />
              </div>
              <div class="col-md-9">
                <div class='img-name'>Melinda C</div>
                <div class='img-city'>Christchurch</div>
              </div>
            </div>
            <div class='img-text'>
              "There’s a wonderful spot to take amazing pictures that only those who use TrackInfo would know!  Wanna know the location?  Come see my posts now!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HearFrom;
