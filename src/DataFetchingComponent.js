// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import dynamodb from './awsconfig';

const DataFetchingComponent = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          TableName: 'bz-venues',
        };

        const result = await dynamodb.scan(params).promise();

        // Convert DynamoDB data to JavaScript objects
const items = result.Items.map((item) => {
    const convertedItem = {};
  
    Object.keys(item).forEach((key) => {
      if (key === 'uuid') {
        convertedItem[key] = item[key].N;
      } else if (key === 'venue_rating') {
        convertedItem[key] = item[key].N;
      } else {
        convertedItem[key] = item[key].S;
      }
    });
  
    return convertedItem;
  });
  

        onDataFetched(items);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return null;
};

export default DataFetchingComponent;
