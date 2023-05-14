import React from 'react';

const VenueListComponent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.uuid}>
          <p>Venue Name: {item.venue_name}</p>
          <p>Venue Category: {item.venue_category}</p>
          <p>Venue Rating: {item.venue_rating}</p>
        </div>
      ))}
    </div>
  );
};

export default VenueListComponent;
