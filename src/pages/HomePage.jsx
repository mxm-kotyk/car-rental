import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </>
  );
};

export default HomePage;
