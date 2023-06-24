import { appLogo } from "../assets";

const Loader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="inline-block relative w-[160px] h-[160px]">
        <div className="absolute top-16 w-[26px] h-[26px] ease-[cubic-bezier(0, 1, 1, 0)] left-4 animate-ldsBee1">
          <img src={appLogo} alt="bee graphic" className="w-full h-full" />
        </div>
        <div className="absolute top-16 w-[26px] h-[26px] ease-[cubic-bezier(0, 1, 1, 0)] left-4 animate-ldsBee2">
          <img src={appLogo} alt="bee graphic" className="w-full h-full" />
        </div>
        <div className="absolute top-16 w-[26px] h-[26px] ease-[cubic-bezier(0, 1, 1, 0)] left-16 animate-ldsBee2">
          <img src={appLogo} alt="bee graphic" className="w-full h-full" />
        </div>
        <div className="absolute top-16 w-[26px] h-[26px] ease-[cubic-bezier(0, 1, 1, 0)] left-28 animate-ldsBee3">
          <img src={appLogo} alt="bee graphic" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
