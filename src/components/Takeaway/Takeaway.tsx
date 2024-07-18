import TakeawayCard from "./takeawayCard";
type Props = {};

function Takeaway({}: Props) {
  const takeaways = [
    {
      title: "Non-Violence: Ahiṃsā",
      gandhi:
        "Gandhi believed in and practiced non-violence as a means to bring about social and political change.",
      details: `This approach encourages resolving disputes through understanding and mutual respect rather than aggression, promoting a broader ethical stance that values peace over conflict.`,
    },
    {
      title: "Tolerance and Respect for All Living Beings",
      gandhi:
        "Influenced by Jain teachings, Gandhi practiced mutual tolerance and non-injury to all living beings. His vegetarianism was a part of this ethical stance.",
      details:
        "This approach can be practiced by showing respect for all living beings, regardless of their background or beliefs. It encourages empathy and understanding, fostering a more inclusive and compassionate society.",
    },
    {
      title: "Courage and Determination",
      gandhi:
        "Gandhi’s courage to stand up against injustice and his determination to achieve independence for India through many difficulties.",
      details:
        "This approach can be practiced in daily life by encouraging ourselves to have courage and determination in carrying out our goals and standing up for what we believe in, even in the face of challanges.",
    },
    {
      title: "Community and Collective Action",
      gandhi:
        "Gandhi’s approach to social and political issues emphasized the importance of community and collective action. He mobilized millions of people to participate in the independence movement.",
      details:
        "This approach reminds us that we can achieve more when we work together as a community, supporting each other and taking collective action to address common challenges and achieve shared goals.",
    },
  ];
  return (
    <div className="mt-10">
      <p className="text-4xl bold mb-4">Takeaway Notes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {takeaways.map((take, index) => {
          return (
            <div key={index}>
              <TakeawayCard
                title={take.title}
                details={take.details}
                gandhi={take.gandhi}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Takeaway;
