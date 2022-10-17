export async function fetchShops(zip = '80304') {
  const params = new URLSearchParams();
  params.set('zip', zip);
  const response = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  return data;
}
