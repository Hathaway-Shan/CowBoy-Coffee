import { checkError, client } from './client';

export async function getUserFavorites(id) {
  const response = await client.from('favorite_shops').select('*').match({ user_id: id });
  return checkError(response);
}
