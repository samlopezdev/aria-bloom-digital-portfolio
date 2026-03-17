import { Image } from "./Image";

const images = [
  {
    name: "Lagoon Sunset",
    src: "src/assets/images/lagoon-sunset.webp",
    description: "Ethereal sky painting with pink clouds and stars",
  },
  {
    name: "Pastel Flower",
    src: "src/assets/images/pastel-flower.webp",
    description: "Ethereal sky painting with pink clouds and stars",
  },
  {
    name: "Snowday",
    src: "src/assets/images/snowday.webp",
    description: "A boy and girl laying on their stomachs in the snow.",
  },
  {
    name: "Discovery",
    src: "src/assets/images/fantasy-couple.webp",
    description: "Ethereal sky painting with pink clouds and stars",
  },
  {
    name: "Flower Girl",
    src: "src/assets/images/flower-girl.webp",
    description: "Ethereal sky painting with pink clouds and stars",
  },
  {
    name: "Royal Courtyard",
    src: "src/assets/images/royal-courtyard.webp",
    description: "Ethereal sky painting with pink clouds and stars",
  },
];

export const Gallery = () => {
  return (
    <section className="flex flex-col gap-8 py-12 md:py-20">
      <div className=" flex justify-between items-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-[-0.015em]">
          Featured Works
        </h2>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
          New
        </span>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {images.map(
          (image: { name: string; src: string; description: string }) => (
            <Image
              key={image.name}
              src={image.src}
              description={image.description}
              name={image.name}
            />
          ),
        )}
      </div>
    </section>
  );
};
