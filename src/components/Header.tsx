import { MdOutlinePalette } from "react-icons/md";

export const Header = () => {
    return (
      <header className="flex items-center justify-between whitespace-nowrap bg-light border-b border-solid border-primary/10 px-20 lg:px-50 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10">
            <MdOutlinePalette className="text-primary text-2xl" />
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
            Maya Blossom
          </h2>
        </div>

        <nav>
          <ul className="flex items-center gap-4 md:gap-8">
            <li className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">
              <a href="#about">About</a>
            </li>
            <li className="bg-primary text-white rounded-lg flex min-w-25 cursor-pointer items-center justify-center h-10 px-5 text-sm font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
              <a href="#contact">
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}