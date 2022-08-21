import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [active, setActive] = useState(1);

  // ну и наговнокодил)))
  return (
    <div className={styles.header}>
      <div className="flex-1 text-2xl">SpaceWithinUs</div>
      <Link
        className={active === 1 ? styles.activeLink : styles.link}
        onClick={() => setActive(1)}
        to={"/"}
      >
        Главная
      </Link>
      <Link
        className={active === 2 ? styles.activeLink : styles.link}
        onClick={() => setActive(2)}
        to={"/photos"}
      >
        Фото
      </Link>
      <Link className={active === 3 ? styles.activeLink : styles.link}
            onClick={()=> setActive(3)} to={"/rover"}>
        Марсоходы
      </Link>
      <Link className={active === 4 ? styles.activeLink : styles.link}
            onClick={()=> setActive(4)} to={"/books"}>
        Книги
      </Link>
      <Link className={active === 5 ? styles.activeLink : styles.link}
            onClick={()=> setActive(5)} to={"/movies"}>
        Фильмы
      </Link>
      <Link className={active === 6 ? styles.activeLink : styles.link}
            onClick={()=> setActive(6)} to={"/games"}>
        Игры
      </Link>
      <Link className={active === 7 ? styles.activeLink : styles.link}
            onClick={()=> setActive(7)} to={"/about"}>
        Ещё что-нибудь
      </Link>
    </div>
  );
};

export default Header;
