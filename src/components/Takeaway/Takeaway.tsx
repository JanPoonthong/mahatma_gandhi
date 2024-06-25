import TakeawayCard from "./takeawayCard";
type Props = {};

function Takeaway({}: Props) {
  const takeaways = [
    {
      title: "Non-Violence",
      details:
        "This approach encourages resolving disputes through understanding and mutual respect rather than coercion and aggression, promoting a broader ethical stance that values peace over conflict.",
    },
    {
      title: "Simplicity and Humility",
      details:
        "personal and societal well-being lies in simplicity and sustainability rather than in endless consumption, promoting an ethical relationship with the environment and resources",
    },
    {
      title: "Social Justice",
      details:
        "Gandhi’s activism extended to fighting discrimination and striving for social justice. His work against the caste system in India, particularly his efforts to uplift the untouchables whom he renamed Harijans (children of God), illustrates his commitment to social equity. This aspect of his ethical framework underscores the importance of fairness and equal rights within society",
    },
  ];
  return (
    <div className="mt-10">
      <p className="text-4xl bold mb-4">Takeaway Notes</p>
      <div className="sm:flex flex-wrap items-start justify-around gap-10">
        {takeaways.map((take, index) => {
          return (
            <div key={index}>
              <TakeawayCard title={take.title} details={take.details} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Takeaway;
