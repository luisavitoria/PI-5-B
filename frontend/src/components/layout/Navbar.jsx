import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdPets } from "react-icons/md";

/* contexts */
import * as c from "../../context/UserContext";

function Navbar() {
  const { authenticated, logout } = useContext(c.Context);

  return (
    <nav className="flex justify-between py-1 px-2">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-xl mr-2">Pets Adoption</h1>
          <span> <MdPets color="#fff" size={32} /></span>
        </div>
      </div>
      <ul className="flex items-center list-none">
        {authenticated ? (
          <>
            <li className="mr-3">
              <Link className="relative text-white text-sm" to="/pet/myadoptions">
                adoções
              </Link>
            </li>
            <li className="mr-3">
              <Link className="relative text-white text-md" to="/pet/mypets">
                pets
              </Link>
            </li >
            <li className="mr-3">
              <Link className="relative text-white text-md" to="/user/profile">
                perfil
              </Link>
            </li>
            <li className="mr-3" onClick={logout}>
              <p className="relative text-white text-md">sair</p>
            </li>
          </>
        ) : (
          <>
            {/* <li className="mr-3">
              <Link className="relative text-white text-md" to="/login">
                entrar
              </Link>
            </li>
            <li className="mr-3">
              <Link className="relative text-white text-md" to="/register">
                registar
              </Link>
            </li> */}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
