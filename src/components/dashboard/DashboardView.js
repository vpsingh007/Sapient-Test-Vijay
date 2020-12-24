import React, { useContext } from "react";
import Spinner from '../shared/Spinner';
import { GlobalContext } from "../../contexts/GlobalContext";
import CardViewComponent from './CardViewComponent';

const DashboardView = () => {
    const { contextData } = useContext(GlobalContext);
    return (
        <section className="right-section">
          {contextData.launchData.length ? <CardViewComponent launchData={contextData.launchData} /> : <Spinner />}
        </section>
    );
};

export default DashboardView;