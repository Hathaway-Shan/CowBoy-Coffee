export async function fetchShops(latitude = '', longitude = '') {
  const params = new URLSearchParams();
  params.set('latitude', latitude);
  params.set('longitude', longitude);
  const response = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  return data;
}

export async function fetchShopDetail(id) {
  const params = new URLSearchParams();
  params.set('id', id);
  const response = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  return data;
}

