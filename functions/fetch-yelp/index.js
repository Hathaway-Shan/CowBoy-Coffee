const fetch = require('cross-fetch');
require('dotenv').config({ path: `.env.development.local` });

exports.handler = async (event) => {
  const latitude = event.queryStringParameters.latitude.toString();
  const longitude = event.queryStringParameters.longitude.toString();
  
  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=${latitude}&longitude=${longitude}&term=coffee`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.businesses),
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};

