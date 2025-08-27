import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <Link to="/register">
      <FaUserCircle />
    </Link>
  );
};

export default UserMenu;
