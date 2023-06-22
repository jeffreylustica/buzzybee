import { useState, useEffect, useRef } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { ProfileImage, Messages, TypeBox } from "./index";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Rooms = ({ setIsActive, selectedUser, userChats }) => {
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});
  const dummyRef = useRef();

  useEffect(() => {
    const getUserChatsData = () => {
      const unsub = onSnapshot(
        doc(db, "chatRooms", userChats[0]?.[0]),
        (doc) => {
          setMessages(doc.data());
        }
      );
      setUserData(userChats[0]?.[1]);

      return () => {
        unsub();
      };
    };

    const getSelectedUserData = () => {
      const unsub = onSnapshot(
        doc(db, "chatRooms", selectedUser?.roomId),
        (doc) => {
          setMessages(doc.data());
        }
      );
      setUserData(selectedUser);

      return () => {
        unsub();
      };
    };

    if (!selectedUser?.roomId) {
      if (userChats[0]?.[0]) {
        getUserChatsData();
      }
    } else {
      getSelectedUserData();
    }
  }, [selectedUser, userChats]);

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center p-4">
        <button
          type="button"
          className="mr-auto rounded-full hover:bg-gray-100 transition-all sm:scale-0"
          onClick={() => setIsActive(false)}
        >
          <HiOutlineChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex items-center space-x-4 mr-auto -ml-8">
          <div className="w-12 h-12 mr-auto">
            <ProfileImage user={userData} />
          </div>
          <span className="text-lg font-bold">{userData.displayName}</span>
        </div>
      </div>
      <Messages messages={messages} ref={dummyRef} />
      <TypeBox userData={userData} />
    </div>
  );
};

export default Rooms;
