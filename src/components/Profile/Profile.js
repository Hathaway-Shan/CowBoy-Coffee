import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  return (
    <div className="profile-container">
      <div>this is a profile my id is: {id}</div>
      <div>Username</div>
      <div>my signature drink is...that psl life yo</div>
      <div>drink history</div>
    </div>
  );
}
