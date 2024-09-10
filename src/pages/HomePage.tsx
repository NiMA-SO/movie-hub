import NavData from "../components/NavData";
import TrendingSwiper from "../components/TrendingSwiper";

const HomePage = () => {

  return (
    <>
      <NavData />
      <main className="h-[600px] my-8 flex flex-col items-center ">
        <TrendingSwiper />
      </main>
    </>
  );
};

export default HomePage;
