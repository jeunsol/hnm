import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션바
// 2. 전체 샹품페이지 => 전체 상품
// 3. 로그인 버튼 클릭 => 로그인 페이지
// 3. 상품상세페이지를 눌렀으나 로그인이 안돼있을경우 => 로그인페이지 나옴
// 4. 로그인이 돼있을경우 => 상품상세페이지 나옴
// 5. 로그아웃 버튼 클릭 => 다시 로그인 페이지 나옴
// 6. 로그인을 하면 로그아웃 버튼이 보이고, 로그아웃을 하면 로그인 버튼이 보임
// 7. 상품 검색 가능

function App() {
  const [authenticate, setAuthenticate] = useState(false); //로그인된 경우=>true
  useEffect(() => {
    console.log("AAA", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
