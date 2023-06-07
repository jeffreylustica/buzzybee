import reactLogo from "../assets/reactLogo.svg";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInWithGoogle } = UserAuth();

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/account");
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
        className="flex items-center justify-self-end space-x-4 rounded-sm py-2 px-6 mt-auto mb-16 bg-gray-100 shadow-md shadow-gray-300  hover:bg-gray-200 hover:shadow-gray-400"
      >
        <FcGoogle /> <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
