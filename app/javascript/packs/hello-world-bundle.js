import ReactOnRails from 'react-on-rails';

import App from '../bundles/App'
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import SearchColumn from '../bundles/SearchColumn/components/SearchColumn';
import TrackTimeline from '../bundles/TrackTimeline/components/TrackTimeline';
import Weather from '../bundles/TrackTimeline/components/Weather';
import ModalDimmer from '../bundles/ReactModule/components/ModalDimmer'
import Privacy from '../bundles/Privacy'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
  HelloWorld,
  SearchColumn,
  TrackTimeline,
  Weather,
  ModalDimmer,
  Privacy
});
