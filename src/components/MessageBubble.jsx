import { UserAuth } from "../context/AuthContext";
import { ProfileImage } from "./index";
const MessageBubble = ({ message }) => {
  const { user } = UserAuth();

  const bubbleClass =
    user.uid === message.senderId
      ? "bg-gold ml-auto order-1"
      : "bg-gray-200 mr-auto order-2";

  return (
    <div className="flex justify-center items-end">
      <div
        className={`max-w-[260px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] xl:max-w-[570px] w-max ${bubbleClass} rounded-lg px-4 py-2 mb-6 shadow-sm shadow-gray-400`}
      >
        {message.text}
      </div>
      <div
        className={`w-7 h-7 ${
          user.uid === message.senderId ? "order-2" : "order-1"
        }`}
      >
        <ProfileImage user={message} />
      </div>
    </div>
  );
};

export default MessageBubble;
