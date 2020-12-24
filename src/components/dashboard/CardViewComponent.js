import React from 'react';
import CardView from '../shared/CardView';
// import NotFound from '../shared/NotFound';
import Spinner from '../shared/Spinner';


function CardViewComponent(props) {
  const launchData = props.launchData;
  return (
      <div className="grid-container">
        {
          launchData.length ? launchData.map((card, index) => <CardView key={index} card={card} />) : <Spinner />
        } 
      </div>    
  );
}

export default React.memo(CardViewComponent);
