import AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-west-2', // Replace with your region
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const dynamodb = new AWS.DynamoDB();

export default dynamodb;
