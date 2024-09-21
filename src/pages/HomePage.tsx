import Actor from "../components/Actor";
import NavData from "../components/header/NavData";
import TrendingSwiper from "../components/TrendingSwiper";

const HomePage = () => {
  return (
    <>
      <NavData />
      <section className="w-[98%] md:w-[80%] mx-auto">
        <main className="sm:h-[600px] my-8 flex flex-col items-center ">
          <TrendingSwiper />
        </main>
        <Actor />
      </section>
    </>
  );
};

export default HomePage;
