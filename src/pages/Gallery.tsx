import { CallToAction } from "../components/CTA";
import { Header } from "../components/Header";
import { HeroAlt } from "../components/HeroAlt";

export default function Gallery() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Artwork"
            titleEnd="Gallery"
            text="A collection of completed works by Aria ethereal digital explorations where light meets petal in a dance of digital abstraction. Curated by Aria Bloom"
          />
          <section className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
            <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
              <div className="w-full lg:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/fullmoon-fantasy.webp"
                />
              </div>
              <div className="w-full lg:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/royal-courtyard.webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-250"
                  src="src/assets/images/cotton-candy-clouds.webp"
                />
              </div>
            </div>
            <div className="flex w-full sm:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/flower-girl.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/bell-flowers-pastel.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/snowy-path.webp"
                />
              </div>
            </div>
          </section>
          <section className="-m-1 flex flex-row sm:flex-wrap md:-m-2 py-4">
            <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
              <div className="w-full lg:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/fantasy-castle.webp"
                />
              </div>
              <div className="w-full lg:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/ocean-shoreline.webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-250"
                  src="src/assets/images/lake-sunset.webp"
                />
              </div>
            </div>
            <div className="flex w-full sm:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/snowday.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/pastel-meadow.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                  src="src/assets/images/snowy-mountain.webp"
                />
              </div>
            </div>
          </section>

          <CallToAction
            heading="Call to Action"
            text="Send to About page plz"
            btnText="About Me"
            link="/about"
          />
        </main>
      </div>
    </div>
  );
}
