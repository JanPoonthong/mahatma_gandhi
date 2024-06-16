import { useState } from "react";
import clsx from "clsx";

const initialTimeLineData = [
  { year: 1869, lineHeight: 8, active: true },
  { year: 1871, lineHeight: undefined, active: false },
  { year: 1886, lineHeight: undefined, active: false },
  { year: 1889, lineHeight: undefined, active: false },
  { year: 1891, lineHeight: undefined, active: false },
  { year: 1893, lineHeight: undefined, active: false },
];

export default function TimeLineBar({
  onIndexChange,
}: {
  onIndexChange: (index: number) => void;
}) {
  const [timeLineData, setTimeLineData] = useState(initialTimeLineData);

  const handleIndexChange = (index: number) => {
    onIndexChange(index);
    setTimeLineData(
      timeLineData.map((item, idx) => ({
        ...item,
        active: idx === index,
        lineHeight: idx === index ? 8 : undefined,
      })),
    );
  };

  return (
    <div className="text-center w-28">
      {timeLineData.map((each, index) => (
        <div key={each.year}>
          <Box
            active={each.active ? "active" : ""}
            year={each.year}
            index={index}
            onIndexChange={handleIndexChange}
          />
          {index < timeLineData.length - 1 && <Line height={each.lineHeight} />}
        </div>
      ))}
    </div>
  );
}

function Box({
  active,
  year,
  index,
  onIndexChange,
}: {
  active: string;
  year: number;
  index: number;
  onIndexChange: (index: number) => void;
}) {
  return (
    <button
      onClick={() => onIndexChange(index)}
      className={clsx(
        "flex justify-center items-center text-2xl w-full h-14 transition duration-500",
        active,
        {
          "bg-white text-black hover:bg-black hover:text-white":
            active !== "active",
          "bg-black text-white": active === "active",
        },
      )}
    >
      {year}
    </button>
  );
}

function Line({ height }: { height?: number }) {
  return (
    <span
      className="block border-l-4 border-black relative left-2/4 line-transition"
      style={{ height: height !== undefined ? `${height}rem` : "2rem" }}
    ></span>
  );
}
