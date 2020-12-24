import React from "react";
import GlobalContextProvider from '../../contexts/GlobalContext';

import LaunchComponent from "./LaunchComponent";
import LandComponent from "./LandComponent";
import YearButtons from "../shared/YearButtons";
import DashboardView from "./DashboardView";
import DeveloperDetails from '../shared/DeveloperDetails';

const LaunchDashboard = props => {
  return (
    <main>
      <GlobalContextProvider >
        <h1>SpaceX Launch Programs</h1>
        <aside className="left-section bg-white">
          <h2>Filters</h2>
          <YearButtons />
          <LaunchComponent />
          <LandComponent />
        </aside>

        <DashboardView />
        <DeveloperDetails />
      </GlobalContextProvider>
    </main>
  );
};

export default React.memo(LaunchDashboard);
