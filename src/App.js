// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
import dynamodb from './awsconfig';

import DataFetchingComponent from './DataFetchingComponent';
import VenueListComponent from './VenueListComponent';

function App() {
  const [data, setData] = useState([]);

  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  return (
    <div>
      <p>brizlist</p>
      <DataFetchingComponent onDataFetched={handleDataFetched} />
      <VenueListComponent data={data} />
    </div>
  );
}

export default App;
