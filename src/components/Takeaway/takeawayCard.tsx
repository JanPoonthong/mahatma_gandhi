type Props = {
  title: string;
  details: string;
};

export default function TakeawayCard({ title, details }: Props) {
  return (
    <div className="max-w-[420px] shrink-0 min-h-[300px] rounded-xl bg-slate-300 p-4 mt-4">
      <div className="w-full">
        <p className="text-xl text-bold">{title}</p>
      </div>
      <div className="w-full mt-4">
        <p className="text-lg">{details}</p>
      </div>
    </div>
  );
}
