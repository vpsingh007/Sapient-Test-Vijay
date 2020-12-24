import React from 'react';

function CardView(props) {
const { card } = props;
  return (
    <div className="card">
        <div className="img-container">
            <img srcSet={card.links.mission_patch_small} alt={card.mission_name} />
        </div>    
        <h3>{`${card.mission_name} #${card.flight_number}`}</h3>
        <div className="details-box">
            <strong>Mission Ids: </strong>
            {card.mission_id.length ? card.mission_id.map((item, index) => <li className="ml-30" key={index}>{item}</li>) : "N/A"}
        </div>
        <div className="details-box">
            <strong>Launch Year: </strong>
            <span>{card.launch_year}</span>
        </div>
        <div className="details-box">
            <strong>Successful Launch: </strong>
            <span>{card.launch_success ? "true" : "false"}</span>
        </div>
        <div className="details-box">
            <strong>Successful Landing: </strong>
            <span>{card.launch_success ? "true" : "false"}</span>
        </div>
    </div> 
  );
}

export default React.memo(CardView);
