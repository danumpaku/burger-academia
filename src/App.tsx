import React, { Fragment } from 'react';
import './App.css';
import ReactLogo from './containers/ReactLogo/ReactLogo';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


const App = () =>
  <Fragment>
  <div className="App">
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>
  <ReactLogo />
  </Fragment>
;

export default App;
