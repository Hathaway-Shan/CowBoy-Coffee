import { checkError, client } from './client';

export async function getUserFavorites(id) {
  const response = await client.from('favorite_shops').select('*').match({ user_id: id });
  return checkError(response);
}

export async function insertFavoriteShop(yelp_id, user_id) {
  const response = await client
    .from('favorite_shops')
    .insert({ yelp_id, user_id }); 
  return checkError(response);
}

export async function deleteFavoriteShop(yelp_id, user_id) {
  const response = await client
    .from('favorite_shops')
    .delete()
    .match({ yelp_id, user_id })
    .single();
  return checkError(response);
}
