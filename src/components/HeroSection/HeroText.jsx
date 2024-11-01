import { FaArrowRight } from "react-icons/fa";

function HeroText() {
  return (
    <div className="flex flex-col gap-3 leading-6 justify-center w-full md:w-[425px] text-center md:text-left">
      <h1 className="text-neutral-1 text-2xl font-bold ">
        Unlock Rewards with the Copin Referral Program
      </h1>
      <h3 className="text-neutral-2 text-sm font-normal">
        Earn rebates and commissions by inviting friends.
        <br />
        Grow your network and benefit from our 6-tier reward system.
      </h3>
      <div className="flex items-center gap-2 mb-4 md:mb-0 justify-center md:justify-start">
        <h5 className="text-primary-2 mr-1 text-sm font-semibold">
          View referral Ranking
        </h5>
        <FaArrowRight className="text-primary-2 transition-transform duration-300 rotate-90 md:rotate-0" />
      </div>
    </div>
  );
}
export default HeroText;
