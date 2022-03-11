import React from "react";
import Layout from "./components/wrapper/Layout";
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));

function App() {
  return (
    <Layout>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<UsersPage />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;
