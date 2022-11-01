import * as React from "react";

import "../styles/banner.css";

import Banner from "../components/Banner";
import Footer from "../components/footer";
import MyProject from "../components/my-project";
import NavBar from "../components/navbar";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <MyProject />
      <Footer />
    </div>
  );
};

export default Home;
