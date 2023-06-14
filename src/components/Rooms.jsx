import { HiOutlineChevronLeft } from "react-icons/hi";
import { ProfileImage, Messages, TypeBox } from "./index";

const Rooms = ({ setIsActive }) => {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between">
      <div className="flex items-center pb-4 mb-2">
        <button
          type="button"
          className="mr-auto rounded-full hover:bg-gray-100 transition-all sm:scale-0"
          onClick={() => setIsActive(false)}
        >
          <HiOutlineChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex items-center space-x-4 mr-auto">
          <div className="w-12 h-12 mr-auto">
            <ProfileImage />
          </div>
          <span className="text-lg font-bold">Room Name</span>
        </div>
      </div>
      <Messages />
      <TypeBox />
    </div>
  );
};

export default Rooms;
