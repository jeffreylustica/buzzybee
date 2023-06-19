import { UserAuth } from "../context/AuthContext";
const MessageBubble = ({ message }) => {
  const { user } = UserAuth();

  const bubbleClass =
    user.uid === message.senderId ? "bg-gold ml-auto" : "bg-gray-200 mr-auto";

  return (
    <div
      className={`sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] xl:max-w-[570px] w-max ${bubbleClass} rounded-lg px-4 py-2 mb-6 shadow-sm shadow-gray-400`}
    >
      {message.text}
    </div>
  );
};

export default MessageBubble;
