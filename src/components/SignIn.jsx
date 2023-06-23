import { appLogo } from "../assets/";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, collection, setDoc } from "firebase/firestore";
import { getAdditionalUserInfo } from "firebase/auth";

const SignIn = () => {
  const { signInWithGoogle } = UserAuth();

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const userAdditionalInfo = await signInWithGoogle();
      if (getAdditionalUserInfo(userAdditionalInfo).isNewUser) {
        addUser(userAdditionalInfo);
        addUserChats(userAdditionalInfo);
      }
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (userInfo) => {
    try {
      await setDoc(doc(collection(db, "users")), {
        uid: userInfo.user.uid,
        displayName: userInfo.user.displayName,
        email: userInfo.user.email,
        photoURL: userInfo.user.photoURL,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addUserChats = async (userInfo) => {
    try {
      await setDoc(doc(db, "userChats", userInfo.user.uid), {});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[url('./assets/waveBg.svg')] bg-no-repeat bg-bottom w-full">
      <img src={appLogo} className="h-40 mb-4" alt="brand-logo" />
      <h1 className="font-bold text-xl mb-20">Buzzybee</h1>
      <button
        onClick={() => signIn()}
        type="button"
        className="flex items-center space-x-4 rounded-sm py-2 px-6 bg-white shadow-sm shadow-gray-300 border-2 border-gray-100 transition-all hover:-translate-y-1 focus:-translate-y-1 focus:bg-yellow-300 hover:bg-yellow-200 hover:shadow-gray-400 focus:shadow-gray-400"
      >
        <FcGoogle className="w-6 h-6" /> <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
