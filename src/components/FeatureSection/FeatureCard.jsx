import PropTypes from "prop-types";
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col self-stretch w-[15.875rem] p-4 rounded-[0.25rem] border-neutral-4 border box-border gap-6">
      <div className="w-[2.875rem] h-[2.875rem] bg-conic-gradient bg-blend-overlay relative rounded-sm ">
        <div
          className="absolute inset-0 backdrop-blur-md flex items-center justify-center"
          style={{ clipPath: "inset(0 round 0.125rem)" }}
        >
          <div>{icon}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium leading-6 text-neutral-1">
          {title}
        </h3>
        <p className="text-sm font-normal text-neutral-2">{description}</p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
