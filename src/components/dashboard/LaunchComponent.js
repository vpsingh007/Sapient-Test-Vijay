import React, { useContext } from 'react';
import StatusButton from "../shared/StatusButton";
import LaunchTitle from '../shared/LaunchTitle';
import { GlobalContext } from '../../contexts/GlobalContext';
import { LAUNCH_SUCCESS_URL, LAUNCH_STATE_CHANGE } from "../../constant/Constant";

const LaunchComponent = () => {
    const { launchLandHandler, launchState } = useContext(GlobalContext);
    return (
        <div className="launch-status-btn clearfix">
            <LaunchTitle title={"Successful Launch"} />
            <div className="button-box row">
              <StatusButton
                successHandler={launchLandHandler}
                queryParam={LAUNCH_SUCCESS_URL}
                status={launchState}
                actionType={LAUNCH_STATE_CHANGE}
              >
                True
              </StatusButton>
              <StatusButton
                successHandler={launchLandHandler}
                queryParam={LAUNCH_SUCCESS_URL}
                status={launchState}
                actionType={LAUNCH_STATE_CHANGE}
              >
                False
              </StatusButton>
            </div>
          </div>
    );
};

export default LaunchComponent;