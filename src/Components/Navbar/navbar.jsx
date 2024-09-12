import { useState } from "react";

function Navbars() {
  const [navitem, NavitemSet] = useState(0);

  const visibility = () => {
    NavitemSet(!navitem);
  };
  return (
    <div className={navitem ? "navbg" : "sideNav"}>
      <div onClick={visibility}>
        <i className="fa-solid fa-bars fa-lg"></i>
      </div>
      {navitem ? (
        <div className="nav-items">
          <a href="#Home">
            <div className="item">
              <i className="fa-solid fa-house-chimney-user fa-lg"></i>
            </div>
          </a>

          <a href="#about">
            <div className="item">
              <i className="fa-solid fa-circle-user fa-lg"></i>
            </div>
          </a>

          <a href="#projects">
            <div className="item">
              <i className="fa-solid fa-briefcase fa-lg"></i>
            </div>
          </a>

          <a href="#contact">
            <div className="item">
              <i className="fa-solid fa-id-card fa-lg"></i>
            </div>
          </a>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default Navbars;
