import clsx from "clsx";
import { textData } from "../../../data/timeLineData";

export default function TimeLineDisplay({
  index,
  animation,
}: {
  index: number;
  animation: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-full border border-black text-3xl p-4 max-sm:text-xl",
        animation ? "text-container" : "",
      )}
    >
      {textData[index]?.text}
    </div>
  );
}
