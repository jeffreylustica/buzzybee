import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { ProfileImage } from "./index";
const MessageBubble = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = UserAuth();

  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    let time = date.toLocaleTimeString([], { timeStyle: "short" });
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    const currentDate = new Date();

    if (currentDate.toDateString() === date.toDateString()) {
      return time + " " + "Today";
    } else {
      return time + " " + mm + "/" + dd + "/" + yyyy;
    }
  };

  const messageDate = convertTimestamp(message.date);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  const bubbleClass =
    user.uid === message.senderId
      ? "bg-gold ml-auto order-1"
      : "bg-gray-200 mr-auto order-2";

  return (
    <div onClick={handleToggle}>
      {isVisible && (
        <div className="text-center text-gray-400 text-sm">{messageDate}</div>
      )}
      <div className="flex justify-center items-end mb-6">
        <div
          className={`max-w-[260px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] xl:max-w-[570px] w-max ${bubbleClass} rounded-lg px-4 py-2 shadow-sm shadow-gray-400`}
        >
          {message.text}
        </div>
        {user.uid !== message.senderId && (
          <div
            className={`w-7 h-7 shrink-0 ${
              user.uid === message.senderId ? "order-2 ml-2" : "order-1 mr-2"
            }`}
          >
            <ProfileImage user={message} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
