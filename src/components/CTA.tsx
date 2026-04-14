interface CallToActionProps {
  heading: string,
  text: string,
  btnText: string,
  link: string
}

export const CallToAction = ({ heading, text, btnText, link}: CallToActionProps) => {
    return (
      <section className="flex flex-col items-center gap-8  bg-primary/5 rounded-2xl md:rounded-4xl border border-primary/10 text-center w-full py-12 md:py-20 px-6 lg:px-20">
        <div className="flex flex-col gap-4 max-w-180 lg:max-w-160">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-pretty">
            {heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-normal text text-pretty">
            {text}
          </p>
        </div>
        <a href={link}>
          <button className="flex min-w-50 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-transform">
            {btnText}
          </button>
        </a>
      </section>
    );
}