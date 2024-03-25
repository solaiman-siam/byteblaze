import Hero from "../components/Hero";
import wave from "../../src/assets/wave.svg";

function Home() {
  return (
    <div className="min-h-[calc(100vh-116px)] relative">
      <Hero></Hero>
      <div className="absolute bottom-0 w-full">
      <img className="w-full" src={wave} alt="" />
      </div>
    </div>
  );
}

export default Home;
