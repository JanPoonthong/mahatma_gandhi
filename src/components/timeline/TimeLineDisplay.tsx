import clsx from "clsx";
import { textData } from "../../../data/timeLineData";

function parser() {
  textData.map((each) => {
    each.text.map((char) => {
      char.li.map((c) => {
        console.log(c);
      });
    });
  });
}

export default function TimeLineDisplay({
  index,
  animation,
}: {
  index: number;
  animation: boolean;
}) {
  parser();
  return (
    <div
      className={clsx(
        "w-full border border-black text-3xl p-4 max-sm:text-xl",
        animation ? "text-container" : "",
      )}
    >
      {textData[index]?.text.map((each) => {
        return (
          <h2
            className="font-bold text-5xl mb-5 uppercase max-sm:text-4xl"
            key={each.title}
          >
            {each.title}
          </h2>
        );
      })}

      <div className="ml-16">
        {textData[index]?.text.map((each) => {
          return (
            <li className="text-2xl list-disc" key={each.li}>
              {each.li}
            </li>
          );
        })}
      </div>
    </div>
  );
}
