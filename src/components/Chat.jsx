import { ProfileImage } from "./index";

const Chat = ({ user }) => {
  return (
    <div className="flex items-center bg-white rounded-md mb-2 p-2 transition-all hover:bg-gray-100 ">
      <div className="w-10 h-10 mr-4">
        <ProfileImage user={user} />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-bold">{user.displayName}</div>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Chat;
