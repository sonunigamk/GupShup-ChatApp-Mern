import { IoMdSearch } from "react-icons/io";
import User from "./User";

const SideBar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col  px-2 gap-2">
      <h1 className="bg-black p-2 rounded-lg mt-2 text-blue-200 font-semibold">
        Gup Shup
      </h1>
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <IoMdSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-1">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <div className="p-2 rounded-md  flex items-center justify-between border-t  border-t-white/10">
        <div class="avatar">
          <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button class="btn bg-red-600 btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
