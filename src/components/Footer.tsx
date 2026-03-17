import { MdOutlinePalette } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-solid border-primary/10 px-20 lg:px-50 py-12 bg-white dark:bg-background-dark/50">
      <div className="flex justify-between items-center">
        <div className="text-primary">
          <div className="flex items-center">
            <MdOutlinePalette />
            <span>Aria Bloom</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; 2026 Aria Bloom. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all text-xl"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all text-xl"
          >
            <FaPatreon />
          </a>
        </div>
      </div>
    </footer>
  );
};
