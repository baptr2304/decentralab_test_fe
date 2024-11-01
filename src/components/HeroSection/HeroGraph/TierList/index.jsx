import TierList from "./TierList";
import GraphBackGround from "./GraphBackGround";
export default function Graph() {
  return (
    <div className="md:w-[362px]flex flex-col justify-center">
      <GraphBackGround />
      <TierList />
    </div>
  );
}
