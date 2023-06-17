import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")}>Book Shelf</h1>

      <h1 onClick={() => navigate("/search")}>Search</h1>
    </nav>
  );
};
