import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const RoversPage = React.lazy(() => import("./pages/RoversPage"));
const RoverPhotoPage = React.lazy(() => import("./pages/RoverPhotoPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const FilmsPage = React.lazy(() => import("./pages/FilmsPage"));
const GamesPage = React.lazy(() => import("./pages/GamesPage"));

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<div>Идёт загрузка...</div>}>
          <Routes>
            <Route path={"/"} element={<HomePage />} />

            <Route path={"/projects"} element={<ProjectsPage />} />
            <Route path={"/rovers"} element={<RoversPage />} />
            <Route path={"/rovers/:name"} element={<RoverPhotoPage />} />
            <Route path={"/movies"} element={<FilmsPage />} />
            <Route path={"/games"} element={<GamesPage />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"*"} element={<NotFound />} />
            {/*<Route path={'/books'} element={}/>*/}
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
