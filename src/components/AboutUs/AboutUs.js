import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function AboutUs() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>AboutUs</div>;
}
