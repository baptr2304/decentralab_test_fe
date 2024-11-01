import { PiLightbulbFilamentFill } from "react-icons/pi";
import FeatureCard from "./FeatureCard";
import { featureData, iconMap } from "../../mock/FeatureData";

function FeatureSection() {
  return (
    <div className="mt-4 flex flex-col items-center w-full">
      <div className="flex items-center gap-2 md:justify-start w-full 2xl:w-[80%] xl:w-[90%] lg:w-[85%] md:w-[90%] justify-center">
        <PiLightbulbFilamentFill className="w-6 h-6 text-neutral-3" />
        <h2 className="text-base text-neutral-1 leading-6">How It Works?</h2>
      </div>
      <div
        className="mt-3 flex flex-wrap justify-center gap-3 w-full
        sm:gap-4
        md:gap-4
        lg:gap-4
        xl:gap-8
        2xl:justify-between 2xl:gap-10 2xl:w-[80%] xl:justify-evenly"
      >
        {featureData.map((feature, index) => {
          const Icon = iconMap[feature.type];
          return (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<Icon className="w-[1.875rem] h-[1.875rem]" />}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSection;
