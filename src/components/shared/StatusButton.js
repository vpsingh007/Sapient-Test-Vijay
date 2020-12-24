import React, { } from 'react';
import { Link } from 'react-router-dom';

const LaunchStatusButton = props => {
    const {successHandler, queryParam} = props;
    const status = props.children.toLowerCase();
    return (
            <div className="col-6">
                <Link className="button" to={`/${queryParam+status}`} onClick={() => successHandler(queryParam, status, props.actionType)}>
                    {props.children}
                </Link>
            </div>
    );
};

export default React.memo(LaunchStatusButton);