import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LabelByYears from '../data/YearsListData';
import LaunchTitle from '../shared/LaunchTitle';
import { YEAR_API_URL, YEAR_CHANGE_TYPE } from '../../constant/Constant';
import { GlobalContext } from "../../contexts/GlobalContext";

const YearButtons = props => {
    const { launchLandHandler } = useContext(GlobalContext);
    return (
        <div>
            <LaunchTitle title={"Launch Year"} />
            <div className="button-box row">
                {LabelByYears.map((item, index) => <div className="col-6" key={index}><Link className="button" to={`/${YEAR_API_URL + item.year}`} onClick={() => launchLandHandler(YEAR_API_URL, item.year, YEAR_CHANGE_TYPE)}>{item.year}</Link></div>)}
            </div>
        </div>
    );
};
export default React.memo(YearButtons);