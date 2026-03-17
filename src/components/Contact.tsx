export const Contact = () => {
    return (
      <section className="flex flex-col items-center gap-8 px-6 bg-primary/5 rounded-4xl border border-primary/10 text-center w-full py-12 md:py-20">
        <div className="flex flex-col gap-4 max-w-160">
          <h2 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-pretty">
            Let's create something magical together!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal text text-pretty">
            I am currently available for freelance opportunities, custom
            commissions, and creative collaborations. Whether you have a
            specific project in mind or just want to say hello, I'd love to hear
            from you!
          </p>
        </div>
        <button className="flex min-w-50 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-transform">
          Hire Me
        </button>
      </section>
    );
}