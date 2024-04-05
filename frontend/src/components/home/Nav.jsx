/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../services/UserContext";

import "../../style/Nav.css";

export default function Navbar() {
  const { reader, setReader } = useContext(UserContext);

  // pour sécuriser l'affichage et donc l'accès a certaines selon si connecté ou non
  const isConnected = reader.id && reader.id !== "null";

  console.info("isConnected", isConnected);

  // pour se déconnecter
  const handleLogout = () => {
    axios
      .delete("http://localhost:3310/api/logout", {
        withCredentials: true,
      })
      .then(() =>
        setReader({
          id: null,
          email: null,
          nickname: null,
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li>{isConnected ? <Link to="/article">Article</Link> : null}</li>
        <li>
          {isConnected ? <Link to="/create">Créer un article</Link> : null}
        </li>
        <li>
          {!isConnected ? <Link to="/register">Créer un compte</Link> : null}
        </li>
        <li>{!isConnected ? <Link to="/login">Se connecter</Link> : null}</li>
        <li>
          {isConnected ? (
            <Link to="/" onClick={handleLogout}>
              Disconnect
            </Link>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}
