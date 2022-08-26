import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import RoversPage from "./pages/RoversPage";
import RoverPhotoPage from "./pages/RoverPhotoPage";
import ProjectsPage from "./pages/ProjectsPage";
import FilmsPage from "./pages/FilmsPage";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path={"/"} element={<HomePage />} />

          <Route path={"/projects"} element={<ProjectsPage />} />
          <Route path={"/rovers"} element={<RoversPage />} />
          <Route path={"/rovers/:name"} element={<RoverPhotoPage />} />
            <Route path={'/movies'} element={<FilmsPage/>}/>
            {/*<Route path={'/books'} element={}/>

               <Route path={'/games'} element={}/>
               <Route path={'/about'} element={}/>
            <Route path={"*"} element={<NotFound />} />*/}
        </Routes>
      </div>
    </>
  );
};

export default App;
