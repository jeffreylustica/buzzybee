import reactLogo from "../assets/reactLogo.svg";

const ProfileImage = ({ user }) => {
  return (
    <img
      src={user?.photoURL}
      alt="user"
      className={`border-2 w-full h-full rounded-full`}
    />
  );
};

export default ProfileImage;
