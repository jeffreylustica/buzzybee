import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
const TypeBox = ({ userData }) => {
  const [message, setMessage] = useState("");
  const { user } = UserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    message && updateMessages();
    updateUserChatsLatestMessage();
    setMessage("");
  };

  const updateMessages = async () => {
    try {
      await updateDoc(doc(db, "chatRooms", userData.roomId), {
        messages: arrayUnion({
          text: message,
          senderId: user.uid,
          photoURL: user.photoURL,
          date: Timestamp.now(),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserChatsLatestMessage = async () => {
    try {
      await updateDoc(doc(db, "userChats", user.uid), {
        [userData.roomId + ".lastMessage"]: message,
        [userData.roomId + ".date"]: serverTimestamp(),
      });
      //for other user
      await updateDoc(doc(db, "userChats", userData.uid), {
        [userData.roomId + ".lastMessage"]: message,
        [userData.roomId + ".date"]: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex items-center p-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Message"
        className="bg-gray-200 shadow-gray-400 shadow-sm rounded-sm p-2 grow focus:outline-none focus:bg-gray-300"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type="submit"
        className="p-4 text-gold transition-all hover:text-gold-900"
      >
        <HiPaperAirplane className="w-8 h-8" />
      </button>
    </form>
  );
};

export default TypeBox;
