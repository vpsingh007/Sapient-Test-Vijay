import React, { useContext } from "react";
import StatusButton from "../shared/StatusButton";
import LaunchTitle from "../shared/LaunchTitle";
import { LAND_SUCCESS_URL, LAND_STATE_CHANGE } from "../../constant/Constant";
import {GlobalContext} from "../../contexts/GlobalContext";

const LandComponent = () => {
  const { launchLandHandler, landState } = useContext(GlobalContext);
  return (
    <div className="launch-status-btn clearfix">
      <LaunchTitle title={"Successful Landing"} />
      <div className="button-box row">
        <StatusButton
          successHandler={launchLandHandler}
          queryParam={LAND_SUCCESS_URL}
          status={landState}
          actionType={LAND_STATE_CHANGE}
        >
          True
        </StatusButton>
        <StatusButton
          successHandler={launchLandHandler}
          queryParam={LAND_SUCCESS_URL}
          status={landState}
          actionType={LAND_STATE_CHANGE}
        >
          False
        </StatusButton>
      </div>
    </div>
  );
};

export default LandComponent;
