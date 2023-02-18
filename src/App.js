import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

// components
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

const Home = React.lazy(() => import("./Routes/Home/HomePage"));

const App = () => {

  return (
    <div className="App">
      <Header />
      <Suspense>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;