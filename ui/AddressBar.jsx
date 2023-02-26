import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Adress from './Adress'
import Login from './Login';


export async function AddressBar() {
  const session = await getServerSession(authOptions)
  let user = {name:'', image:''}
  try {user = session.user}
  catch {}
  console.log(session)
  return (
      <Login user = {user}/>
  );
}