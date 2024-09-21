import Actor from "../components/Actor";
import NavData from "../components/header/NavData";
import HomeMainGrid from "../components/HomeMainGrid";
import PostProvider from "../components/PostProvider";
import TrendingSwiper from "../components/TrendingSwiper";
import Type from "../components/Type";

const HomePage = () => {
  return (
    <>
      <NavData />
      <section className="w-[98%] md:w-[80%] mx-auto">
        <PostProvider>
          <main className="sm:h-[600px] my-8 flex flex-col items-center ">
            <Type/>
            <TrendingSwiper />
          </main>
          <Actor />
          <HomeMainGrid />
        </PostProvider>
      </section>
    </>
  );
};

export default HomePage;
