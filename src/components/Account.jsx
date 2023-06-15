import { useState } from "react";
import { ChatsList, Rooms } from "./index";
import { UserAuth } from "../context/AuthContext";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Account = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, signOutAcct } = UserAuth();
  const [filteredUsers, setFilteredUsers] = useState([]);

  const usersRef = collection(db, "users");

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

  console.log(filteredUsers);

  return (
    <div className="h-screen flex relative">
      <ChatsList
        isActive={isActive}
        user={user}
        signOutAcct={signOutAcct}
        searchUsers={searchUsers}
        filteredUsers={filteredUsers}
      />
      <Rooms setIsActive={setIsActive} />
    </div>
  );
};

export default Account;
