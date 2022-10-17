import { client } from './client';


export function getUser() {
  return client.auth.user();
}

export async function authUser(email, password, type) {
  let response;
  if (type === 'sign-up') {
    response = await client.auth.signUp(email, password, type);
  } else {
    response = await client.auth.signIn(email, password, type);
  }
  if (response.error) throw new Error(response.error.message);
  
  return response.user;

}