import { checkError, client } from './client';

export async function getUserFavorites(user) {
  const response = await client.from('favorite_drinks')
    .match({ user_id: user.id })
    .select();
  return checkError(response);
}