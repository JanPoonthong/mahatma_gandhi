type Props = {
  title: string;
  gandhi: string;
  details: string;
};

export default function TakeawayCard({ title, details, gandhi }: Props) {
  return (
    <div className="w-full min-h-[300px] rounded-xl bg-slate-300 p-4 mt-4">
      <div className="w-full">
        <p className="text-2xl text-bold">{title}</p>
      </div>
      <div className="w-full mt-4">
        <p className="text-lg">{gandhi}</p>
      </div>

      <div className="w-full mt-4">
        <p className="text-lg">{details}</p>
      </div>
    </div>
  );
}
