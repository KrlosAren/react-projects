import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// container components
import {
  Home,
  Checkout,
  Payment,
  Information,
  Success,
  NotFound,
} from '../containers/index';

// layout component
import Layout from '../components/Layout';

// context
import AppProvider from '../context/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/checkout/information' component={Information} />
            <Route exact path='/checkout/payment' component={Payment} />
            <Route exact path='/checkout/success' component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
