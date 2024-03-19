import React, { Suspense } from "react";
import { Navbar } from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";

const LazyLandingsection1 = React.lazy(() =>
  import("../../Components/Home/Landingsection1")
);
const LazyLandingsection2 = React.lazy(() =>
  import("../../Components/Home/Landingsection2")
);
const LazyLandingsection3 = React.lazy(() =>
  import("../../Components/Home/Landingsection3")
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLandingsection1 />
        <LazyLandingsection2 />
        <LazyLandingsection3 />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
