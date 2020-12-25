import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './Grid.css';
import Spinner from './components/shared/Spinner';
import LaunchDashboard from './components/dashboard/Dashboard.Component';
// import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
      <div className="container mt-3">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route  path="/" component={LaunchDashboard} />
          </Switch>
        </Suspense>
      </div>          
  );
}

export default App;
