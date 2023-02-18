import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

// components
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

const Homepage = React.lazy(() => import("./Pages/Homepage/Homepage"));

const App = () => {

  return (
    <div className="App">
      <Header />
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;