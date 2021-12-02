import GenericSection from "../components/home/GenericSection";
import HomeBanner from "../components/home/HomeBanner";
import HomeCards from "../components/home/HomeCards";
import HomeSubCards from "../components/home/HomeSubCards";
import YoutubeChannel from "../components/home/YoutubeChannel";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeCards />
      <HomeSubCards />
      <GenericSection />
      <YoutubeChannel />
    </>
  );
};

export default HomePage;
