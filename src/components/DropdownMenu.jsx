import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const DropdownMenu = ({ user, signOutAcct }) => {
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await signOutAcct();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-[250px] bg-white rounded-sm divide-y-2 divide-solid divide-gray-200 border-solid border-2">
      <div className="px-4 py-2">
        <span>Signed in as</span>
        <div>{user?.displayName}</div>
      </div>
      <div className="py-2">
        <button
          type="button"
          className="w-full text-left px-4 py-2 hover:bg-gold-200 flex items-center gap-1"
          onClick={handleSignout}
        >
          <HiOutlineLogout />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
