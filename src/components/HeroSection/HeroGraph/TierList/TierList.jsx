import PropTypes from "prop-types";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Tier1 from "../../../../assets/images/tier/tier1.svg";
import Tier2 from "../../../../assets/images/tier/tier2.svg";
import Tier3 from "../../../../assets/images/tier/tier3.svg";
import Tier4 from "../../../../assets/images/tier/tier4.svg";
import Tier5 from "../../../../assets/images/tier/tier5.svg";
import Tier6 from "../../../../assets/images/tier/tier6.svg";
import LightBeam from "./LightBeam";
import LineBackGround from "./LineBackGround";

const CurveChart = ({ hoveredTier }) => {
  const getPointPosition = (level) => {
    const positions = {
      1: { left: "7%", top: "91%" },
      2: { left: "24%", top: "85%" },
      3: { left: "41.5%", top: "76%" },
      4: { left: "58.5%", top: "63%" },
      5: { left: "76%", top: "47%" },
      6: { left: "94%", top: "22%" },
    };
    return positions[level];
  };

  const getTooltipContent = (level) => {
    if (!level) return "";
    return `
      <div style="text-align: left;">
        <div>F0 (Rebate): ${
          level === 1
            ? "2%"
            : level === 2
            ? "3%"
            : level === 3
            ? "4%"
            : level === 4
            ? "4.5%"
            : level === 5
            ? "5%"
            : "6%"
        }</div>
        <div>F1 (Commission): ${
          level === 1
            ? "15%"
            : level === 2
            ? "20%"
            : level === 3
            ? "25%"
            : level === 4
            ? "30%"
            : level === 5
            ? "35%"
            : "40%"
        }</div>
        <div>F2 (Commission): ${
          level === 1
            ? "5%"
            : level === 2
            ? "7%"
            : level === 3
            ? "8%"
            : level === 4
            ? "9%"
            : level === 5
            ? "10%"
            : "12%"
        }</div>
      </div>
    `;
  };

  const renderPoint = () => {
    if (!hoveredTier) return null;

    const position = getPointPosition(hoveredTier);

    return (
      <>
        <div
          className="absolute w-2 h-2 rounded-full bg-white border-primary-2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          style={{
            ...position,
            boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.5)`,
          }}
          data-tooltip-id="point-tooltip"
          data-tooltip-html={getTooltipContent(hoveredTier)}
          data-tooltip-place={hoveredTier >= 5 ? "bottom" : "top"}
        />

        <Tooltip
          id="point-tooltip"
          className="point-tooltip"
          noArrow={true}
          opacity={0.7}
          isOpen={hoveredTier !== null}
          style={{
            backgroundColor: "rgba(2, 6, 23, 0.75)",
            backdropFilter: "blur(8px)",
            border: "2px solid rgba(59, 130, 246, 0.5)",
            color: "white",
            borderRadius: "4px",
            padding: "8px 12px",
            background:
              "linear-gradient(180deg, rgba(2, 6, 23, 0.75) 0%, rgba(13, 39, 80, 0.75) 100%)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            zIndex: 1000,
            fontSize: "12px",
            lineHeight: "1.5",
          }}
        />
      </>
    );
  };

  return (
    <div className="absolute inset-0">
      <LineBackGround />
      {renderPoint()}
    </div>
  );
};

const TierCard = ({ level, isActive, onMouseEnter, onMouseLeave }) => {
  const tierIcons = {
    1: Tier1,
    2: Tier2,
    3: Tier3,
    4: Tier4,
    5: Tier5,
    6: Tier6,
  };

  const tierHeights = {
    1: "h-10",
    2: "h-10",
    3: "h-12",
    4: "h-12",
    5: "h-13",
    6: "h-13",
  };

  const tierWidths = {
    1: "w-8",
    2: "w-8",
    3: "w-8",
    4: "w-8",
    5: "w-10",
    6: "w-10",
  };

  const renderTierEffects = () => {
    if (isActive) {
      return (
        <div className="absolute inset-0 bottom-[-20px] z-0">
          <LightBeam />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="flex flex-col items-center w-[50px] h-[72px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="relative flex">
          <div
            className={`${tierWidths[level]} relative ${tierHeights[level]}`}
          >
            {renderTierEffects()}
            {level === 4 && <div className="absolute inset-0" />}
            <img
              src={tierIcons[level]}
              alt={`Tier ${level}`}
              className="w-full h-full object-contain relative z-10"
              style={{
                viewBox: "0 0 32 32",
                display: "block",
              }}
            />
          </div>
        </div>
        <span className="text-xs font-medium mb-1 text-neutral-1 text-center leading-4 tracking-wide">
          Tier {level}
        </span>
      </div>
    </div>
  );
};

TierCard.propTypes = {
  level: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

CurveChart.propTypes = {
  hoveredTier: PropTypes.number,
};

const TierList = () => {
  const [hoveredTier, setHoveredTier] = useState(null);

  return (
    <div className="relative w-[362px]">
      <div className="absolute left-0 right-0 -top-[200px] h-[200px]">
        <CurveChart hoveredTier={hoveredTier} />
      </div>

      <div className="flex items-center justify-between gap-4">
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <TierCard
            key={level}
            level={level}
            isActive={hoveredTier === level}
            onMouseEnter={() => setHoveredTier(level)}
            onMouseLeave={() => setHoveredTier(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default TierList;
