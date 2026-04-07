import { Contact } from "../components/home_page/Contact";
import { Gallery } from "../components/home_page/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/home_page/Hero";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 pt-0 px-2 md:px-8 lg:px-16 max-w-300 m-auto">
          <Hero />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
