import clsx from "clsx";
import { textData } from "../../../data/timeLineData";

function parser(char: string) {
  const regex = /<%>(.*?)<\/%>/g;
  const matches = char.match(regex);
  const innerText = matches?.map((match) => {
    return match.match(/<%>(.*?)<\/%>/)?.[1];
  });
  const parsedText = char.replace(regex, `<strong>${innerText?.[0]}</strong>`);

  return parsedText;
}

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
            <li className="text-2xl list-disc max-sm:text-lg" key={each.li}>
              <div dangerouslySetInnerHTML={{ __html: parser(each.li) }} />
            </li>
          );
        })}
      </div>
    </div>
  );
}
