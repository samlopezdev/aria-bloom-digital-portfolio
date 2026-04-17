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
            <section>
              <div className="flex gap-2 flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                  <img
                    src="src/assets/images/fantasy-couple.webp"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                  <img
                    src="src/assets/images/fantasy-couple.webp"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                  <img
                    src="src/assets/images/fantasy-couple.webp"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                  <img
                    src="src/assets/images/fantasy-couple.webp"
                    className="w-full h-60 object-cover rounded-lg"
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