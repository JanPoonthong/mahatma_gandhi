import clsx from "clsx";

const textData = [
  {
    text: ` The fire was reported at 06:00 AST (03:00 GMT) on the ground floor of a
      six-storeyed residential building. The building housed 196 workers. A
      large number of people were in the building at the time of the fire.
      The fire began in the security room before spreading to the kitchen, where
      over 20 LPG cylinders and other flammable materials were present, allowing
      the fire to spread rapidly.Flames engulfed the lower part of the
      building and thick black smoke billowed from the upper floors.Most of
      the deaths were a result of smoke inhalation while sleeping,while
      several victims suffered from fall injuries. Security agencies rescued 67
      people.Five firefighters were injured during rescue efforts. The
      fire was put out within ten minutes after firefighters arrived. A
      preliminary investigation found that the fire was caused by an electrical
      short-circuit in the security guards room located on the ground floor of
      the building and was exacerbated by the use of an inflammable material
      to partition apartments and rooms. It also found that victims were
      prevented from escaping to the rooftop by a locked door`,
  },
  {
    text: `The fire was reported at 06:00 AST (03:00 GMT) on the ground floor of a
      six-storeyed residential building. The building housed 196 workers. A
      large number of people were in the building at the time of the fire.
      dddhe fire began in the security room before spreading to the kitchen, where
      over 20 LPG cylinders and other flammable materials were present, allowing
      to partition apartments and rooms. It also found that victims were
      prevented from escaping to the rooftop by a locked door`,
  },
];
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
        "w-full border border-black text-3xl p-4",
        animation ? "text-container" : "",
      )}
    >
      {textData[index]?.text}
    </div>
  );
}
