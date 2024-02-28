import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["Women", "Divided", "Men", "Baby", "Kids", "H&M HOME", "Sport", "sale"];
  const [width, setwidth] = useState(0);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    // console.log("key press");

    if (event.key === "Enter") {
      console.log("Enter key!!!", event.key);

      //입력한 검색어를 읽어와서 url을 바꿔줘야함
      let keyword = event.target.value;
      console.log("keyword", keyword);

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="close-btn" onClick={() => setwidth(0)}>
          &times;
        </button>
        <div className="side-menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setwidth(250)} />
        </div>
        {authenticate ? (
          <div className="login-button" onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} style={{ marginTop: "3px" }} />
            <div>로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} style={{ marginTop: "3px" }} />
            <div>로그인</div>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" />
        </Link>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
