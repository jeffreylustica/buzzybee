import reactLogo from "../assets/reactLogo.svg";
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
      }
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (userAdditionalInfo) => {
    try {
      console.log("here", userAdditionalInfo);
      await setDoc(doc(collection(db, "users")), {
        uid: userAdditionalInfo.user.uid,
        displayName: userAdditionalInfo.user.displayName,
        photoUrl: userAdditionalInfo.user.photoURL,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={reactLogo} className="h-40 mb-6 mt-auto" alt="brand-logo" />
      <h1 className="font-bold text-xl text-gold-900">Buzzybee</h1>
      <button
        onClick={() => signIn()}
        type="button"
        className="flex items-center justify-self-end space-x-4 rounded-sm py-2 px-6 mt-auto mb-16 bg-gray-100 shadow-md shadow-gray-300 transition-all hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-gray-400"
      >
        <FcGoogle /> <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
