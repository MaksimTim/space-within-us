import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import Header from "./components/Header/Header";
import RoversPage from "./pages/RoversPage";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/photos"} element={<PhotosPage />} />
          <Route path={"/rover"} element={<RoversPage />} />
          {/*<Route path={'/books'} element={}/>
               <Route path={'/movies'} element={}/>
               <Route path={'/games'} element={}/>
               <Route path={'/about'} element={}/>*/}
        </Routes>
      </div>
    </>
  );
};

export default App;
