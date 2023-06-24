import { useEffect, useState } from "react";
import { ChatsList, Rooms } from "./index";
import { UserAuth } from "../context/AuthContext";
import {
  getDoc,
  getDocs,
  doc,
  collection,
  query,
  where,
  setDoc,
  serverTimestamp,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const Account = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, signOutAcct } = UserAuth();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const usersRef = collection(db, "users");

  useEffect(() => {
    setIsLoading(true);
    const getUserChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user?.uid), (doc) => {
        setUserChats(
          Object.entries(doc?.data()).sort((a, b) => b[1].date - a[1].date)
        );
        setIsLoading(false);
      });

      return () => {
        unsub();
      };
    };

    user?.uid && getUserChats();
  }, [user]);

  const searchUsers = async (textArr) => {
    try {
      const querySnapshot = await getDocs(
        query(usersRef, where("displayName", "in", textArr))
      );
      const users = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setFilteredUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectUser = async (selectedUser) => {
    const combinedId =
      user.uid > selectedUser.uid
        ? user.uid + selectedUser.uid
        : selectedUser.uid + user.uid;

    try {
      const chatRoom = await getDoc(doc(db, "chatRooms", combinedId));

      if (!chatRoom.exists()) {
        //create chat in chat collection
        await setDoc(doc(db, "chatRooms", combinedId), { messages: [] });

        //create userChats for current user
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".displayName"]: selectedUser.displayName,
          [combinedId + ".photoURL"]: selectedUser.photoURL,
          [combinedId + ".uid"]: selectedUser.uid,
          [combinedId + ".lastMessage"]: "",
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".roomId"]: combinedId,
        });
        //create userChats for selected user
        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".displayName"]: user.displayName,
          [combinedId + ".photoURL"]: user.photoURL,
          [combinedId + ".uid"]: user.uid,
          [combinedId + ".lastMessage"]: "",
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".roomId"]: combinedId,
        });
      }

      const selectedUserData = await getDoc(doc(db, "userChats", user.uid));
      setSelectedUser(selectedUserData.data()[combinedId]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex relative">
      <ChatsList
        isActive={isActive}
        setIsActive={setIsActive}
        user={user}
        signOutAcct={signOutAcct}
        searchUsers={searchUsers}
        filteredUsers={filteredUsers}
        handleSelectUser={handleSelectUser}
        userChats={userChats}
        isLoading={isLoading}
      />
      <Rooms
        setIsActive={setIsActive}
        selectedUser={selectedUser}
        userChats={userChats}
      />
    </div>
  );
};

export default Account;
