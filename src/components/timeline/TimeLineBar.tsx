import clsx from "clsx";
export default function TimeLineBar() {
  return (
    <div className="text-center w-28 ">
      <Box year={1869} />
      <Line height={4} />
      <Box year={1869} />
      <Line height={4} />
      <Box year={1869} />
      <Line height={4} />
      <Box year={1869} />
      <Line height={4} />
      <Box year={1869} />
      <Line height={4} />
      <Box year={1869} />
    </div>
  );
}

function Box({ year }: { year: number }) {
  return (
    <div className="flex justify-center items-center bg-white text-black transition duration-500 hover:bg-black hover:text-white text-2xl w-full h-14">
      {year}
    </div>
  );
}

function Line({ height }: { height: number }) {
  return (
    <span
      className={clsx(
        "block border-l-4 border-black",
        height != undefined ? `h-${height}` : "h-4",
      )}
    ></span>
  );
}
