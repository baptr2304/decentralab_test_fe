import HeroText from "./HeroText";
import HeroGraph from "./HeroGraph/TierList";
function HeroSection() {
  return (
    <div className="bg-custom-gradient flex justify-center items-center">
      <div className=" pt-4 flex flex-col md:flex-row md:justify-between items-center w-full px-4 2xl:w-[80%] xl:w-[90%] lg:w-[85%] md:w-[90%] box-border">
        <HeroText />
        <HeroGraph />
      </div>
    </div>
  );
}
export default HeroSection;
