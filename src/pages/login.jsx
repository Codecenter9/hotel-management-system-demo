import { Button, Input } from "@heroui/react";
import { AlertCircle, Lock, Mail } from "lucide-react";
import roles from "../constants/roles";
import { useState } from "react";
import users from "../constants/users";
import { useNavigate } from "react-router-dom";
import styles from "../constants/styles";

const Login = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && (!selectedRole || u.role === selectedRole),
    );

    if (!user) {
      setError("Invalid credentials or role");
      return;
    }

    const pagesForRole = {
      admin: "/admin/dashboard",
      reception: "/reception/dashboard",
      customer: "/customer/dashboard",
      waiter: "/waiter/dashboard",
    };

    localStorage.setItem("authUser", JSON.stringify(user));
    navigate(pagesForRole[user.role]);
  };

  return (
    <div className="bg-gray-950 flex items-center gap-5 min-h-screen overflow-hidden">
      <div className="hidden lg:flex flex-col w-full items-center justify-center">
        <h1 className="text-3xl text-gray-600 font-mono italic">Integrated</h1>
        <h1 className="text-xl text-gray-100 font-serif">
          Hotel Management System
        </h1>
      </div>

      <div className="relative flex flex-col items-center px-10 py-12 w-full gap-3 bg-gray-900/50 h-screen overflow-hidden">
        <span className="absolute w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl -top-40 -right-40 z-0"></span>

        <span className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl -bottom-40 -left-40 z-0"></span>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <h1 className="text-xl text-gray-100 font-serif">Login Portal</h1>
          <h1 className="text-base text-gray-400 font-serif text-center">
            Login with correct credentials to access the system!
          </h1>
        </div>

        <div className="w-full flex flex-col gap-5 bg-gray-900/30 p-10 rounded-md max-w-md z-10">
          <div className="flex flex-wrap w-full gap-2">
            {roles.map((role) => (
              <div
                key={role.key}
                onClick={() => setSelectedRole(role.key)}
                className={`px-3 py-1 rounded-md text-sm cursor-pointer border transition-all duration-300
                  ${
                    selectedRole === role.key
                      ? "bg-emerald-500/30 border-emerald-500 text-white"
                      : "bg-gray-800/30 border-gray-700 text-gray-300 hover:bg-gray-800/50"
                  }`}
              >
                {role.name}
              </div>
            ))}
          </div>

          <div className="relative flex items-center">
            <Input
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} px-14 `}
              placeholder="Enter email..."
            />
            <Mail className="absolute left-3 text-gray-500" />
          </div>

          <div className="relative flex items-center">
            <Input
              type="password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} px-14 `}
              placeholder="Enter password..."
            />
            <Lock className="absolute left-3 text-gray-500" />
          </div>

          {error && (
            <div className={styles.errorBox}>
              <AlertCircle size={18} className="mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}
          <Button
            fullWidth
            onClick={handleLogin}
            className="rounded-md font-mono bg-emerald-500/60 hover:bg-emerald-600 transition-all duration-300"
          >
            Sign In
          </Button>

          <div className="flex items-center w-full gap-4 my-4">
            <div className="flex-1 h-px bg-gray-800"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <Button
            fullWidth
            className="rounded-md font-mono bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
