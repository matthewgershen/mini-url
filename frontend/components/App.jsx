import React from 'react';
import Url from './url';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={Url} />
  </div>
);

export default App;
