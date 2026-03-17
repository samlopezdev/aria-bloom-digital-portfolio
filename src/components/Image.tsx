type ImageProps = {
  name: string;
  src: string;
  description: string;
};

export const Image = ({ name, src, description }: ImageProps) => (
  <a
    href="#"
    className="relative aspect-4/5 bg-slate-200 rounded-xl transition-transform shadow-lg shadow-primary/20 hover:scale-105 hover:rotate-2"
    title={name}
  >
    <img
      src={src}
      alt={description}
      className="object-cover w-full h-full rounded-xl"
    />
  </a>
);
