import { useState } from "react";
import sidebarLinks from "../../constants/sidebar-link";
import { Button, Dropdown, Label, Input } from "@heroui/react";
import {
  Settings,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../../constants/styles";

const Sidebar = ({ authUser, isOpen, setIsOpen, collapsed, setCollapsed }) => {
  const [selected, setSelected] = useState("settings");

  const [openMenu, setOpenMenu] = useState(null);

  const menus = sidebarLinks[authUser.role] || [];
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full ${styles.pageLayout} z-50 border-r ${styles.border}
          flex flex-col transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="h-18 flex justify-between items-center p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <User size={18} />
            </div>

            {!collapsed && (
              <div>
                <h3 className="text-sm font-bold capitalize font-serif">
                  {authUser.name}
                </h3>
                <p className="text-xs text-gray-400 font-serif">
                  {authUser.role} Account
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 bg-gray-800 hover:bg-gray-700 rounded-full cursor-pointer"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        {!collapsed && (
          <div className="flex items-center p-4">
            <Input
              aria-label="Name"
              className={styles.input}
              placeholder="Search..."
            />
          </div>
        )}

        <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
          <div className="w-full flex items-center my-2">
            <h1 className="text-sm font-semibold font-serif tracking-wide text-gray-300 uppercase">
              Menus
            </h1>
          </div>
          {menus.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}>
                {!item.submenu ? (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-serif flex items-center gap-3 px-3 py-1.5 rounded transition-all duration-200
    ${
      isActive(item.path)
        ? "bg-gray-800/20 text-emerald-400 border-l-2 border-emerald-500"
        : "hover:bg-gray-800 text-gray-300"
    }`}
                  >
                    {Icon && <Icon size={18} />}
                    {!collapsed && item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMenu(index)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-800"
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon size={18} />}
                        {!collapsed && item.title}
                      </div>

                      {!collapsed && (
                        <span>
                          {openMenu === index ? (
                            <ChevronUp size={12} />
                          ) : (
                            <ChevronDown size={12} />
                          )}
                        </span>
                      )}
                    </button>

                    {openMenu === index && !collapsed && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-2 py-1 text-sm rounded transition-all
    ${
      isActive(sub.path)
        ? "bg-emerald-500/20 text-emerald-400"
        : "hover:bg-gray-800 text-gray-300"
    }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="border-t border-gray-800 px-4 py-2 space-y-1 bg-gray-900">
          <Dropdown>
            <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800">
              <Button
                aria-label="Menu"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
              >
                <User size={18} />
              </Button>
              {!collapsed && (
                <div>
                  <h3 className="text-sm font-bold capitalize font-serif">
                    {authUser.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-serif">
                    {authUser.role} Account
                  </p>
                </div>
              )}
            </div>
            <Dropdown.Popover className="min-w-[256px] bg-gray-800 border border-gray-700 rounded-md shadow-xl">
              <Dropdown.Menu
                className="bg-gray-800 text-gray-100"
                selectedKeys={selected}
                selectionMode="single"
                onSelectionChange={setSelected}
              >
                <Dropdown.Section>
                  {[
                    { id: "settings", icon: Settings, label: "Settings" },
                    { id: "profile", icon: User, label: "Profile" },
                    { id: "logout", icon: LogOut, label: "Logout" },
                  ].map(({ id, icon: Icon, label }) => (
                    <Dropdown.Item
                      key={id}
                      onClick={() => {
                        if (id === "logout") {
                          handleLogout();
                        }
                      }}
                      textValue={label}
                      className="text-gray-100 hover:bg-gray-700 rounded-md flex items-center gap-2 px-3 py-2 transition-colors"
                    >
                      <Icon size={18} />
                      <Label className="text-gray-100">{label}</Label>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
