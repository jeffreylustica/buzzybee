import { appLogo } from "../assets";
const ProfileImage = ({ user }) => {
  return (
    <img
      src={user.photoURL || appLogo}
      alt="user"
      className={`border-2 w-full h-full rounded-full`}
    />
  );
};

export default ProfileImage;
