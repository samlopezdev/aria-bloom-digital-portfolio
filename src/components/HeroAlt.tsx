interface HeroAltProps {
  titleStart: string,
  titleEnd: string,
  text: string
}

export const HeroAlt = ({ titleStart, titleEnd, text }: HeroAltProps) => {
    return (
      <section className="text-center">
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-bold leading-tight tracking-[-0.015em]">
          {titleStart}<span className="text-primary">{titleEnd}</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed">
          {text}
        </p>
      </section>
    );
}