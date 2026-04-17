import { MdCalendarToday, MdSend } from "react-icons/md";
import { Header } from "../components/Header";
import { HeroAlt } from "../components/HeroAlt";
import { Footer } from "../components/Footer"

export default function HireMe() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Let's Create Something "
            titleEnd="Ethereal"
            text="Transforming your ideas into ditital dreamscapes. Fill out the details below to start out collaborative journey."
          />
          <section>
            <div>
              <img src="" alt="" />
            </div>
          </section>
          <section className="rounded-4xl p-8 md:p-12 shadow-lg shadow-primary/20 border border-primary/5 bg-white w-full">
            <form className="space-y-5">
              <fieldset className="flex gap-3">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-14 px-6 bg-primary/8 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 transition-all"
                    placeholder="Your name"
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-14 px-6 bg-primary/8 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 transition-all"
                    placeholder="hello@ethereal.com"
                    autoComplete="true"
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <label
                  htmlFor="concept"
                  className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                >
                  Brief description of your idea or scene
                </label>
                <textarea
                  name="concept"
                  id="concept"
                  className="w-full p-6 bg-primary/8 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 focus:outline-none transition-all"
                  placeholder="Tell me about the mood, the story, or the magic you want to capture..."
                  rows={4}
                  required
                ></textarea>
              </fieldset>
              <fieldset className="space-y-5">
                <div>
                  <label
                    htmlFor="characters"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Number of characters and their personality
                  </label>
                  <input
                    className="w-full h-14 px-6 bg-primary/8 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 focus:outline-none transition-all"
                    id="characters"
                    placeholder="e.g. 1 character, melancholic but graceful"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="appearance"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Character appearances &amp; references
                  </label>
                  <textarea
                    name="appearance"
                    id="appearance"
                    className="w-full p-6 bg-primary/8 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 focus:outline-none transition-all"
                    placeholder="Hair, outfit, eyes... Or provide links to moodboards."
                    rows={3}
                    required
                  ></textarea>
                </div>
              </fieldset>
              <fieldset className="flex gap-5">
                <div className="w-1/2 space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1">
                    Desired Framing
                  </span>
                  <label
                    htmlFor="portrait"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="portrait"
                      name="framing"
                      value={"portrait"}
                      className="accent-primary"
                      required
                    />
                    <span className="font-medium">Portrait</span>
                  </label>
                  <label
                    htmlFor="waist-up"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="waist-up"
                      name="framing"
                      value={"waist-up"}
                      className="accent-primary"
                    />
                    <span className="font-medium">Waist-Up</span>
                  </label>
                  <label
                    htmlFor="full-body"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="full-body"
                      name="framing"
                      value={"full-body"}
                      className="accent-primary"
                    />
                    <span className="font-medium">Full Body</span>
                  </label>
                </div>
                <div className="w-1/2 space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1">
                    Preferred Coloring
                  </span>
                  <label
                    htmlFor="line-art"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="line-art"
                      name="coloring"
                      value={"line-art"}
                      className="accent-primary"
                      required
                    />
                    <span className="font-medium">Line Art Only</span>
                  </label>
                  <label
                    htmlFor="flat-color"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="flat-color"
                      name="coloring"
                      value={"flat-color"}
                      className="accent-primary"
                    />
                    <span className="font-medium">Flat Color</span>
                  </label>
                  <label
                    htmlFor="full-render"
                    className="flex items-center gap-3 p-4 bg-primary/8 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <input
                      type="radio"
                      id="full-render"
                      name="coloring"
                      value={"full-render"}
                      className="accent-primary"
                    />
                    <span className="font-medium">Full Render</span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="pt-10 border-t-2 border-primary/10">
                <div>
                  <label
                    htmlFor="background"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Background Ideas &amp; Intended Usage
                  </label>
                  <textarea
                    name="background"
                    id="background"
                    className="w-full p-6 bg-primary/8 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 focus:outline-none transition-all"
                    placeholder="Forest, cosmic void, city.... Personal use, gift, etc."
                    rows={3}
                  ></textarea>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs font-bold uppercase tracking-wider text-primary ml-1 mb-1"
                  >
                    Your timeline or specific deadline
                  </label>
                  <div>
                    <input
                      type="text"
                      id="timeline"
                      placeholder="e.g. By December 25th"
                      className="w-full h-14 px-6 bg-primary/8 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-primary/10 focus:outline-none transition-all"
                    />
                    <MdCalendarToday className="absolute right-4 top-4 text-primary" />
                  </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="w-full md:w-auto px-12 h-14 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
              >
                Submit Request
                <MdSend />
              </button>
              <p className="mt-4 text-xs text-center md:text-left text-[#322528]">
                I usually respond to requests within 48 hours.
              </p>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
