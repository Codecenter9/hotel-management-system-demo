import { Menu, Bell } from "lucide-react";
import styles from "../../constants/styles";

const Navbar = ({ authUser, onToggleSidebar }) => {
  return (
    <nav
      className={`w-full h-18  ${styles.pageLayout} border-b ${styles.border} flex items-center justify-between px-4`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 hover:bg-gray-800 rounded-md cursor-pointer"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-lg font-bold capitalize">HMS - {authUser.role}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-800 rounded-md cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
