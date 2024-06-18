import { initialTimeLineData } from "../../../data/timeLineData";

export default function TimeLineBarMobile({
  index,
  onIndexChange,
}: {
  index: number;
  onIndexChange: (index: number) => void;
}) {
  function onLeftClick(index: number) {
    console.log("Left click");
    if (index > 0) {
      onIndexChange(index - 1);
    }
  }

  function onRightClick(index: number) {
    console.log("Right click");
    if (index < initialTimeLineData.length - 1) {
      onIndexChange(index + 1);
    }
  }

  return (
    <div className="flex justify-evenly items-center bg-black w-3/4 h-14 text-white text-3xl sm:hidden ">
      <button onClick={() => onLeftClick(index)}>&larr;</button>
      <p>{initialTimeLineData[index].year}</p>
      <button onClick={() => onRightClick(index)}>&rarr;</button>
    </div>
  );
}
