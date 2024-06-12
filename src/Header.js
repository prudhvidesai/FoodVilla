import { useState } from "react";
import useOnline from '../utils/useOnline'
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [isClicked, setisClicked] = useState(false);
  const loginTxt = isClicked ? "Logout" : "Login";

  const handleLogin = () => {
    setisClicked((prev) => !prev);
  };

  const onlineStatus = useOnline();

  const res = onlineStatus ? "âœ…" : "ðŸ”´";

  return (
    <div className="flex justify-between bg-black">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3LPpVLMyRUMfwvsMq-rWJ8qLxJglTMI8gZe5450pXHwSI6DMz6VlrFF5JQugLx3K5x8&usqp=CAU"
        alt="logo"
        className="w-[30px]"
      />
      <nav className="flex justify-between">
        <p style={{ marginRight: "5px" }}>Online: {res}</p>
        <Link to={"/"}>
          <p style={{ marginRight: "5px" }}>Home</p>
        </Link>
        <Link to={"/about"}>
          <p style={{ marginRight: "5px" }}>Aboutus</p>
        </Link>
        <Link to={"/contact"}>
          <p style={{ marginRight: "5px" }}>Contact</p>
        </Link>

        <button className="login-btn" onClick={handleLogin}>
          {loginTxt}
        </button>
      </nav>
    </div>
  );
};
export default Header;