import React from 'react';
import { Image } from 'semantic-ui-react'
// import '../stylesheets/landing-page/layout.scss'

const HearFrom = () => {

  return(
    <section id="hear-from" className="pb-4">
      <div className="container-new">
        <div className="row">
          <div className="my-2 py-4 title">
            <div className="popular-title">Hear form what others say</div>
            <div className="popular-sub-title">What you have shared might help somebody else today!</div>
          </div>
          <div className="bg-light box-shadow mx-auto"></div>
        </div>
        <div className="row row-box">
          <div className="col-md-4 col-box">
          <div className="row">
            <div className="col-md-3">
              <Image src='https://fakeimg.pl/66x66/' wrapped circular />
            </div>
            <div className="col-md-9">
              <div className='img-name'>Melinda C</div>
              <div className='img-city'>Christchurch</div>
            </div>
          </div>
          <div className='img-text'>
            "Thanks for the posts on TrackInfo, I was able to avoid heavy rain, muddy ground and accidents which wasn’t mentioned in forecast!"
          </div>
          </div>
          <div className="col-md-4 col-box">
            <div className="row">
              <div className="col-md-3">
                <Image src='https://fakeimg.pl/66x66/' wrapped circular />
              </div>
              <div className="col-md-9">
                <div className='img-name'>Melinda C</div>
                <div className='img-city'>Christchurch</div>
              </div>
            </div>
            <div className='img-text'>
              "It’s easy for me to use!  I usually don't like posting but it's so fast and easy!"
            </div>
          </div>
          <div className="col-md-4 col-box">
            <div className="row">
              <div className="col-md-3">
                <Image src='https://fakeimg.pl/66x66/' wrapped circular />
              </div>
              <div className="col-md-9">
                <div className='img-name'>Melinda C</div>
                <div className='img-city'>Christchurch</div>
              </div>
            </div>
            <div className='img-text'>
              "There’s a wonderful spot to take amazing pictures that only those who use TrackInfo would know!  Wanna know the location?  Come see my posts now!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HearFrom;
