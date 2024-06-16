import clsx from "clsx";

const timeLineData = [
  { year: 1869, lineHeight: 4 },
  { year: 1871, lineHeight: undefined },
  { year: 1886, lineHeight: undefined },
  { year: 1889, lineHeight: undefined },
  { year: 1891, lineHeight: undefined },
  { year: 1893, lineHeight: undefined },
];

export default function TimeLineBar({
  onIndexChange,
}: {
  onIndexChange: (index: number) => void;
}) {
  return (
    <div className="text-center w-28 ">
      {timeLineData.map((each, index) => {
        return (
          <div key={each.year}>
            <Box year={each.year} index={index} onIndexChange={onIndexChange} />
            <Line height={each.lineHeight} />
          </div>
        );
      })}
    </div>
  );
}

function Box({
  year,
  index,
  onIndexChange,
}: {
  year: number;
  index: number;
  onIndexChange: (index: number) => void;
}) {
  function handleOnClick(index: number) {
    onIndexChange(index);
  }

  return (
    <button
      onClick={() => handleOnClick(index)}
      className="flex justify-center items-center bg-white text-black transition duration-500 hover:bg-black hover:text-white text-2xl w-full h-14"
    >
      {year}
    </button>
  );
}

function Line({ height }: { height?: number }) {
  return (
    <span
      className={clsx("block border-l-4 border-black relative left-2/4")}
      style={{ height: height != undefined ? `${height}rem` : "2rem" }}
    ></span>
  );
}
