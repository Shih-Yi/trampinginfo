import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import SearchColumn from '../bundles/SearchColumn/components/SearchColumn';
import SearchHeader from '../bundles/SearchColumn/components/SearchHeader';
import SearchResults from '../bundles/SearchColumn/components/SearchResults';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  SearchColumn,
  SearchHeader,
  SearchResults,
});