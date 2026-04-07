import { MdOutlineAutoAwesome } from "react-icons/md";
import { GetStartedListItem } from "./GetStartedListItem";

const getStartedList = [
  {
    number: "01",
    descritpion: "A brief description of your idea or scene",
  },
  {
    number: "02",
    descritpion: "Number of characters and their personality",
  },
  {
    number: "03",
    descritpion: "Character appearance &amp; reference images",
  },
  {
    number: "04",
    descritpion: "Desired framing (Portrait / Waist-up / Full Body)",
  },
  {
    number: "05",
    descritpion: "Preferred coloring (Line, Flat Color, or Full Render)",
  },
  {
    number: "06",
    descritpion: "Background ideas and intended usage",
  },
  {
    number: "07",
    descritpion: "Your timeline or specific deadline",
  },
];

export const CommisionInfo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="bg-primary/15 rounded-xl p-8 lg:col-span-7">
        <h2 className="flex text-3xl font-bold mb-5">
          <MdOutlineAutoAwesome className="text-primary mr-3" />
          How to Get Started
        </h2>

        <ul className="space-y-5">
          {getStartedList.map((item) => (
            <GetStartedListItem
              number={item.number}
              description={item.descritpion}
            />
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5 bg-slate-200 rounded-xl shadow-lg shadow-primary/20">
        <img src="src/assets/images/sirenportrait.jpg" className="rounded-lg" />
      </div>
    </section>
  );
};
