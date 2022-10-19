const fetch = require('cross-fetch');
require('dotenv').config({ path: `.env.development.local` });

exports.handler = async (event) => {
  let latitude = null;
  let longitude = null;
  if (event.queryStringParameters.latitude) 
    latitude = event.queryStringParameters.latitude.toString();
  if (event.queryStringParameters.longitude)
    longitude = event.queryStringParameters.longitude.toString();

  let id = event.queryStringParameters.id;
  id = id ? id.toString() : null;

  console.log('latitude: ', latitude);
  console.log('longitude: ', longitude);
  console.log('id: ', id);

  try {
    let response;
    if (!id) {
      response = await fetch(
        `https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=${latitude}&longitude=${longitude}&term=coffee`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
          },
        }
      );
      console.log('response is: ', response.ok);
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data.businesses),
      };
    }
    else {
      console.log('inside id route');
      response = await fetch(
        `https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
          },
        }
      );
      console.log('response is: ', response.ok);
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};

